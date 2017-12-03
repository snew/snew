import get from "lodash/fp/get";
import set from "lodash/fp/set";
import eq from "lodash/fp/eq";
import lte from "lodash/fp/lte";
import gte from "lodash/fp/gte";
import filter from "lodash/fp/filter";
import reduce from "lodash/fp/reduce";
import constant from "lodash/fp/constant";
import compose from "lodash/fp/compose";
import uniqBy from "lodash/fp/uniqBy";
import orderBy from "lodash/fp/orderBy";
import first from "lodash/fp/first";
import last from "lodash/fp/last";
import { and, or, not, map, lc } from "../../../util";
import { entities } from "../../../components/snew/Markdown";

const isSticky = get(["data", "stickied"]);
const withoutStickies = filter(not(isSticky));
const sortNewest = orderBy([get(["data", "created_utc"])], ["desc"]);
const sortHotness = orderBy([get(["data", "hotness"])], ["desc"]);
const getNewestTimestamp = compose(get(["data", "created_utc"]), first, sortNewest);
const getOldestTimestamp = compose(get(["data", "created_utc"]), last, sortNewest);
const getMaxHot = compose(get(["data", "hotness"]), first, sortHotness, withoutStickies);
const getLeastHot = compose(get(["data", "hotness"]), last, sortHotness, withoutStickies);

export const parseJson = response => (response && response.json && response.json()) || {};
export const hotSort = orderBy([get(["data", "hotness"])], ["desc"]);
export const uniqThings = uniqBy(or(get(["data", "name"]), get(["data", "id"])));
export const byName = reduce((r, t) => ({ ...r, [get(["data", "name"], t)]: t }), {});
export const filterDeleted = filter(compose(not(eq("[deleted]")), get(["data", "author"])));
export const checkNotDeleted = compose(not(eq("[deleted]")), get(["data", "author"]));
export const subredditHotSort = orderBy([get(["data", "stickied"]), get(["data", "hotness"])], ["desc", "desc"]);
export const subredditCheck = (sr) => (sr === "all")
  ? constant(true) : compose(eq(lc(sr)), lc, get(["data", "subreddit"]));
export const isRemovedCheck = or(
  and(
    compose(eq("[removed]"), get(["data", "body"])),
    compose(eq("[deleted]"), get(["data", "author"])),
  ),
  compose(eq("[removed]"), get(["data", "selftext"]))
);

export const hotnessCheck = (minH, maxH) => compose(
  and(or(lte(minH), not(constant(minH))), or(gte(maxH), not(constant(maxH)))),
  get(["data", "hotness"])
);
export const newnessCheck = (mind, maxd) => compose(
  and(or(lte(mind), not(constant(mind))), or(gte(maxd), not(constant(maxd)))),
  get(["data", "created_utc"])
);

export const scoreHotness = ({ data: { score, created_utc } }) => {
  const seconds = created_utc - 1134028003;
  const order = Math.log10(Math.max(Math.abs(score), 1));
  let sign = 0;
  if (score > 0) { sign = 1; } else if (score < 0) { sign = -1; }
  return (sign * order + seconds / 45000);
};

const normalizeChild = count => (child, idx) => ({
  ...child,
  rank: count + idx + 1,
  data: {
    ...child.data,
    body: child.data.body && entities.decode(child.data.body),
    title: child.data.title && entities.decode(child.data.title),
    link_flair_text: child.data.link_flair_text && entities.decode(child.data.link_flair_text),
    author_flair_text: child.data.author_flair_text && entities.decode(child.data.author_flair_text),
    hotness: scoreHotness(child)
  }
});

export const normalizeListing = (count, path, params={}) => ({ children=[], ...listing }) => compose(
  allChildren => ({
    ...listing,
    allChildren,
    before: (
      (params.after || (count - allChildren.length > 1)) &&
      (params.after || params.before || listing.after || listing.before)
      && get(["data", "name"], first(children))
    ),
    after: (params.after || params.before || listing.after || listing.before)
      && get(["data", "name"], last(children)),
    path,
    params,
    count,
    limit: params.limit || allChildren.length,
    newestTimestamp: getNewestTimestamp(allChildren),
    oldestTimestamp: getOldestTimestamp(allChildren),
    maxHot: getMaxHot(allChildren),
    leastHot: getLeastHot(allChildren)
  }),
  map(normalizeChild(count)),
)(children);

const flattenCommentsReducer = (comments, comment) => set(
  get(["data", "id"], comment),
  { ...comment, replies: undefined },
  reduce(
    flattenCommentsReducer,
    comments,
    get(["replies", "data", "children"], comment)
  )
);

const mapCommentTreeReducer = (tree, comment) => reduce(
  mapCommentTreeReducer,
  ({
    ...tree, [get(["data", "parent_id"], comment)]: {
      ...get(get(["data", "parent_id"], comment), tree),
      [get(["data", "id"], comment)]: true
    }
  }),
  get(["replies", "data", "children"], comment) || []
);

export const flattenComments = reduce(flattenCommentsReducer, {});
export const mapCommentTree = reduce(mapCommentTreeReducer, {});

export const transformComment = fn => comment => ({
  ...comment,
  data: {
    ...fn(comment).data,
    replies: comment.data ? {
      ...comment.data.replies,
      data: comment.data.replies ? {
        ...comment.data.replies.data,
        children: map(
          transformComment(fn),
          get(["data", "replies", "data", "children"], fn(comment))
        )
      } : null
    } : null
  }
});
