import queryString from "query-string";
import get from "lodash/fp/get";
import compose from "lodash/fp/compose";
import reduce from "lodash/fp/reduce";
import last from "lodash/fp/last";
import first from "lodash/fp/first";
import { parseJson, normalizeListing } from "./util";

const key = "7e9b27126097f51ae6c9cd5b049af34891da6ba6";
const user = "publicmodlogs";

const fetchViaYahoo = (sr, url, { count=0, ...params }) => {
  const query = {
    q: `select * from json where url="${url}"`,
    format: "json"
  };
  return fetch(`https://query.yahooapis.com/v1/public/yql?${queryString.stringify(query)}`)
    .then(parseJson)
    .then(compose(
      normalizeListing(count, `/r/${sr}/about/log/`, params),
      get(["query", "results", "json", "data"])
    ));
};

const fetchViaCrossoriginMe = (sr, url, { count=0, ...params }) =>
  fetch(`https://crossorigin.me/${url}`)
    .then(parseJson).then(compose(normalizeListing(count, `/r/${sr}/about/log/`, params), get("data")));

const normalizeActionTarget = (action, target) => target && ({
  ...target,
  data: {
    ...target.data,
    author: action.data.target_author || target.data.author,
    body: action.data.target_body || target.data.body,
    body_html: action.data.target_body ? null : target.data.body_html,
    selftext: action.data.target_body || target.data.body_selftext,
    selftext_html: action.data.target_body ? null : target.data.selftext_html,
    banned_by: (action.data.action === "spamlink" || action.data.action === "removelink" || target.data.body === "[removed]" || target.data.selftext === "[removed]") && "moderators"
  }
});

export const onFetchModLog = (effects, subreddit, params={}) => {
  params = { limit: 100, ...params };
  return effects.then()
    .then(() => {
      const logUrl = `https://www.reddit.com/r/${subreddit}/about/log/.json?feed=${key}&user=${user}&${queryString.stringify(params)}`;
      return fetchViaYahoo(subreddit, logUrl, params)
        .catch(error => console.error((error && error.stack) || error) || fetchViaCrossoriginMe(subreddit, logUrl, params));
    })
    .then(({ allChildren, ...rest }) =>
      effects.onFetchNames(allChildren.map(get(["data", "target_fullname"])).filter(x => !!x))
        .then(compose(
          reduce((cMap, c) => ({ ...cMap, [get(["data", "name"], c)]: c }), {}),
          get("named")
        ))
        .then(byName => ({
          ...rest,
          allChildren: allChildren.map(action => ({
            ...action,
            data: {
              ...action.data,
              target: normalizeActionTarget(action, get(get(["data", "target_fullname"], action), byName))
            }
          })),
          after: compose(get(["data", "id"]), last)(allChildren),
          before: params.count && compose(get(["data", "id"]), first)(allChildren)
        })))
    .then(listing => state => ({ ...state, listings: [listing] }));
};
