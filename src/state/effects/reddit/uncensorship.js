import Promise from "promise";
import get from "lodash/fp/get";
import map from "lodash/fp/map";
import filter from "lodash/fp/filter";
import find from "lodash/fp/find";
import eq from "lodash/fp/eq";
import orderBy from "lodash/fp/orderBy";
import compose from "lodash/fp/compose";
import constant from "lodash/fp/constant";
import reduce from "lodash/fp/reduce";
import { not, and, or, concat } from "../../../util";
import {
  parseJson, hotSort, uniqThings, filterDeleted, hotnessCheck, newnessCheck, subredditHotSort,
  subredditCheck, checkNotDeleted, flattenComments, transformComment, mapCommentTree
} from "./util";

const PUSHSHIFT_SUBMISSIONS_SEARCH = "https://api.pushshift.io/reddit/search/submission";
const PUSHSHIFT_COMMENTS_SEARCH = "https://api.pushshift.io/reddit/search/comment";
const PUSHSHIFT_SUBMISSION_LIMIT=500;
const PUSHSHIFT_COMMENT_LIMIT=10000;
const LACKS_CONFIDENCE="{may not be)";

export const fetchPushshiftListing = (effects, subreddit) => effects.then()
  .then(() => fetch(`${PUSHSHIFT_SUBMISSIONS_SEARCH}?subreddit=${subreddit}&limit=${PUSHSHIFT_SUBMISSION_LIMIT}`))
  .then(parseJson).then(compose(effects.onFetchNames, map(compose(id => "t3_" + id, get("id"))), get("data")))
  .then(compose(
    map(item => ({
      ...item,
      rank:"?",
      data: {
        ...item.data,
        banned_by: (item.data.selftext === "[removed]")
          ? "moderators"
          :item.data.is_self
            ? item.data.banned_by
            : LACKS_CONFIDENCE
      }
    })),
    filterDeleted, get("named")
  ))
  .then(pushshift => state => ({
    ...state, pushshift: uniqThings(pushshift.concat(state.pushshift || []))
  }));


export const fetchSubredditRemovals = (effects, subreddit) => effects.then()
  .then(() => (subreddit === "all")
    ? effects.fetchFrontpageWatch()
    : Promise.all([
      effects.fetchPushshiftListing(subreddit),
      effects.fetchFrontpageWatch("/r/undelete+longtail/search", {
        restrict_sr: "on", sort: "new", search: `url:/r/${subreddit}`
      })
    ]))
  .then(() => state => ({ ...state, uncensorSubreddit: subreddit }));

export const _setUncensorSubreddit = (effects, uncensorSubreddit) => state => ({ ...state, uncensorSubreddit });
export const setUncensorSubreddit = (effects, subreddit) => effects.then()
  .then(({ uncensorSubreddit }) => (uncensorSubreddit === subreddit)
    ? state => state
    : effects._setUncensorSubreddit(subreddit)
      .then(() => effects.fetchSubredditRemovals(subreddit))
      .then(() => effects.reinsertRemoved())
      .then(() => state => state));

export const reinsertRemoved = () => (state) => {
  const sr = get("subreddit", state);
  const fromReddit = get(["listings", 0, "allChildren"], state);
  const [firstListing, ...rest] = get("listings", state) || [];
  if (!firstListing || !fromReddit || fromReddit.length === 1) return state;
  if (state.listingSort !== "hot" && state.listingSort !== "new") return;
  const boundsCheck = (state.listingSort === "hot")
    ? hotnessCheck(firstListing.leastHot, firstListing.count && firstListing.maxHot)
    : newnessCheck(firstListing.oldestTimestamp, firstListing.newestTimestamp);

  return compose(
    allChildren => ({ ...state, listings: [ { ...firstListing, allChildren }, ...rest ] }),
    state.listingSort === "new"
      ? map(thing => get(["data", "banned_by"], thing) === LACKS_CONFIDENCE
        ? { ...thing, data: { ...thing.data, banned_by: "moderators" } } : thing)
      : x => x,
    state.listingSort === "hot"
      ? (!sr || sr === "all" ? hotSort : subredditHotSort)
      : orderBy([get(["data", "created_utc"])], ["desc"]),
    uniqThings, concat(
      constant(fromReddit),
      compose(filter(and(
        checkNotDeleted, boundsCheck, subredditCheck(state.subreddit)
      )), concat(get("frontpageWatch"), get("pushshift")))
    )
  )(state);
};

export const resetPushshiftComments = () => state => ({...state, pushshiftComments: {}, removedComments: null});

export const fetchPushshiftComments = (effects, link_id) => effects.then()
  .then(() => effects.resetPushshiftComments())
  .then(() => fetch(`${PUSHSHIFT_COMMENTS_SEARCH}?sort=asc&link_id=${link_id}&limit=${PUSHSHIFT_COMMENT_LIMIT}`))
  .then(parseJson).then(compose(
    reduce((cMap, c) => ({ ...cMap, [get(["data", "id"], c)]: c }), {}),
    map(data => ({ kind: "t1", data })), get("data")
  ))
  .then(pushshiftComments => state => ({
    ...state, pushshiftComments, commentTree: mapCommentTree(Object.values(pushshiftComments))
  }));

export const crossreferencePushshiftComments = (effects) => effects.then()
  .then(compose(
    effects.onFetchNames,
    map(compose(id => `t1_${id}`, get(["data", "id"]))), get("pushshiftComments")
  )).then(state => compose(
    reduce(
      (cMap, c) => {
        const id = get(["data", "id"], c);
        const existing = get(id, cMap) || { data: {} };
        return ({
          ...cMap, [id]: {
            ...existing, data: {
              ...existing.data,
              body: existing.data.body,
              body_html: null, //compose(eq("[removed]"), get(["data", "body"]))(c) ? null : existing.data.body_html,
              banned_by: (compose(eq("[removed]"), get(["data", "body"]))(c) && "moderators") || null,
              score: get(["data", "score"], c),
              score_hidden: get(["data", "score_hidden"], c),
              controversiality: get(["data", "controversiality"], c),
              name: get(["data", "name"], c)
            }
          }
        });
      },
      get("pushshiftComments", state)
    ), get("named")
  )(state)).then(pushshiftComments => state => {
    const removedComments = compose(
      reduce((cMap, c) => ({...cMap, [get(["data", "id"], c)]: c}), {}),
      filter(get(["data", "banned_by"])), Object.values
    )(pushshiftComments);
    return ({ ...state, pushshiftComments, removedComments });
  });

export const restoreSelfPost = (effects, id) => effects.then()
  .then(() => fetch(`${PUSHSHIFT_SUBMISSIONS_SEARCH}?ids=${id}`))
  .then(parseJson)
  .then(get(["data", 0]))
  .then(({ selftext, author }) => state => ({
    ...state,
    listings: [
      {
        ...state.listings[0],
        allChildren: [
          {
            ...state.listings[0].allChildren[0],
            data: {
              ...state.listings[0].allChildren[0].data,
              selftext, author, banned_by: "moderators", selftext_html: null
            }
          }
        ]
      },
      state.listings[1]
    ]
  }));

export const checkLinkRemoval = (effects, thing) => get(["data", "is_self"], thing) ? state => state : effects.then()
  .then(() => effects.onFetchThings("/api/info", { url: get(["data", "url"], thing) }))
  .then(get(["/api/info", "allChildren"]))
  .then(allLinks => {
    allLinks.push(thing);
    allLinks = uniqThings(allLinks);
    const other = find(compose(not(eq(get(["data", "id"], thing))), get(["data", "id"])), allLinks);
    if (!other) return { allLinks, approvedLinks: [thing] };
    const dupes1Path = get(["data", "permalink"], thing).replace("/comments/", "/duplicates/");
    const dupes2Path = get(["data", "permalink"], other).replace("/comments/", "/duplicates/");
    return Promise.all([
      effects.onFetchThings(dupes1Path, {}, 1).then(get([dupes1Path, "allChildren"])),
      effects.onFetchThings(dupes2Path, {}, 1).then(get([dupes2Path, "allChildren"]))
    ]).then(([dupes1, dupes2]) => console.log({ dupes1, dupes2 }) || uniqThings(dupes1.concat(dupes2)))
      .then(approvedLinks => ({ allLinks, approvedLinks }));
  })
  .then(({ allLinks, approvedLinks }) => {
    const approved = reduce((a, l) => ({ ...a, [get(["data", "id"], l)]: true }), {}, approvedLinks);
    allLinks = allLinks.map(link => approved[get(["data", "id"], link)] ? link : ({
      ...link, data: { ...link.data, banned_by: !link.data.stickied && "moderators" }
    }));
    const viewed = find(compose(eq(get(["data", "id"], thing)), get(["data", "id"])), allLinks) || thing;
    const others = filter(not(eq(viewed)), uniqThings(allLinks.concat(approvedLinks)));
    return { viewed, others };
  })
  .then(linkDuplicates => state => ({
    ...state,
    linkDuplicates,
    listings: [
      {
        ...state.listings[0],
        allChildren: [linkDuplicates.viewed]
      },
      state.listings[1]
    ]
  }));

const restoreComment = state => comment => ({ ...comment, data: comment.data
  ? ((get(["data", "body"], comment) === "[removed]") && ({
    ...comment.data,
    banned_by: "moderators",
    author: (
      get(["pushshiftComments", get(["data", "id"], comment), "data", "author"], state)
      || get(["data", "author"], comment)
    ),
    body_html: null,
    body: (
      get(["pushshiftComments", get(["data", "id"], comment), "data", "body"], state)
      || get(["data", "body"], comment)
    ),
  })) || comment.data : null
});

const reinsertRemovedForComment = state => comment => ({ ...comment, data: comment.data
  ? {
    ...(get(["data"], comment) || {}),
    replies: {
      ...(get(["data", "replies"], comment) || {}),
      data: {
        ...(get(["data", "replies", "data"], comment) || {}),
        children: uniqThings([
          ...(get(["data", "replies", "data", "children"], comment) || []),
          ...map(
            id => get(["pushshiftComments", id], state),
            Object.keys(get(["commentTree", get(["data", "name"], comment)], state) || {})
          )
        ])
      }
    }
  } : comment.data
});

export const restoreComments = () => state => ({ ...state,
  listings: (state.listings && [
    state.listings[0], state.listings[1] && {
      ...state.listings[1], allChildren: compose(
        map(transformComment(restoreComment(state))),
        get(["listings", 1, "allChildren"])
      )(state) || []
    }
  ]) || state.listings,
  commentsFromReddit: flattenComments(get(["listings", 1, "allChildren"], state) || [])
});

export const reinsertRemovedComments = () => state => ({
  ...state,
  listings: (state.listings && [
    state.listings[0],
    state.listings[1] && {
      ...state.listings[1],
      allChildren: compose(
        map(transformComment(reinsertRemovedForComment(state))),
        uniqThings, concat(
          get(["listings", 1, "allChildren"]),
          () => hotSort(map(
            id => get(["pushshiftComments", id], state),
            Object.keys(get([
              "commentTree", get(["listings", 0, "allChildren", 0, "data", "name"], state)
            ], state) || {})
          ))
        )
      )(state) || []
    },
  ]) || state.listings
});

export const fetchFrontpageWatch = (effects, path="/r/undelete/new", params={}) => Promise.resolve()
  .then(() => effects.onFetchThings(path, params)).then((state) => {
    const idIndexMap = {}, frontpageWatchMap = {};
    return compose(
      effects.onFetchNames,
      filter(item => !!item), map((item) => {
        const index = parseInt(item.data.title.slice(2, 20).split("|")[0], 10);
        if (!index) return;
        const parts = item.data.url.split("/").filter(i => !!i);
        parts.pop();
        const id = parts.pop();
        idIndexMap[id] = index;
        frontpageWatchMap[id] = item;
        return "t3_" + id;
      }),
      filter(compose(eq("Frontpage-Watch"), get(["data", "author"]))),
      get([path, "allChildren"])
    )(state)
      .then(compose(
        filter(and(
          or(
            compose(eq("[removed]"), get(["data", "selftext"])),
            not(get(["data", "is_self"]))
          ),
          get("rank")
        )),
        map((item => ({
          ...item,
          rank: idIndexMap[get(["data", "id"], item)],
          data: {
            ...item.data,
            banned_by: "moderators",
            meta_thing: frontpageWatchMap[get(["data", "id"], item)]
          },
        }))),
        get("named")
      ))
      .then(frontpageWatch => state => ({
        ...state,
        frontpageWatch: uniqThings(frontpageWatch.concat(state.frontpageWatch || []))
      }));
  });

export const resetDuplicates = () => state => ({ ...state, linkDuplicates: null });

export const uncensorDuplicates = () => state => ({
  ...state,
  listings: [
    state.listings[0],
    { allChildren: hotSort(state.linkDuplicates.others) }
  ]
});

export const uncensoredListing = (effects, {
  pathname, params={}, link_id, subreddit, link_view
}) => effects.then()
  .then(() => effects.resetDuplicates())
  .then(() => effects.setIsLoading(true))
  .then(() => effects.setIsFetching(true))
  .then(() => effects.onFetchRedditListing(pathname, params))
  .then(() => effects.reinsertRemoved())
  .then(() => link_view === "comments" && effects.restoreComments())
  .then(() => effects.setIsLoading(false))
  .then(() => (subreddit && !link_id) ? effects.setUncensorSubreddit(subreddit || "all") : effects.then())
  .then((state) => link_id && effects.then()
    .then(() => effects.checkLinkRemoval(get(["listings", 0, "allChildren", 0], state)))
    .then(() => ("[removed]" === get(["listings", 0, "allChildren", 0, "data", "selftext"], state)) &&
      effects.restoreSelfPost(link_id))
    .then(() => link_view === "comments" && effects.then()
      .then(() => effects.fetchPushshiftComments(link_id))
      .then(() => effects.restoreComments())
      .then(() => effects.crossreferencePushshiftComments(link_id))
      .then(() => effects.reinsertRemovedComments())
      .then(() => effects.restoreComments())))
  .then((state) => (
    link_view === "duplicates" &&
    !get(["listings", 0, "allChildren", 0, "data", "is_self"], state) &&
    effects.uncensorDuplicates()
  ))
  .then(() => effects.setIsFetching(false))
  .then(() => state => state);
