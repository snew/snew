import map from "lodash/fp/map";
import compose from "lodash/fp/compose";
import get from "lodash/fp/get";
import { normalizeListing, parseJson, byName, isRemovedCheck } from "./util";

const PUSHSHIFT_BASE = "https://beta.pushshift.io/reddit";

const pushshiftToThings = map(data => {
  const kind = data.title ? "t3" : "t1";
  return { kind, data: { ...data, name: `${kind}_${data.id}` } };
});

export const fetchPushshift = (effects, pathWithParams) => effects.then()
  .then(() => fetch(PUSHSHIFT_BASE + pathWithParams)).then(parseJson)
  .then(compose(pushshiftToThings, get("data")))
  .then(things => state => ({
    ...state, pushshift: { ...(state.pushshift || {}), [pathWithParams]: things }
  }));

export const fetchPushshiftAndReddit = (effects, path) => effects.fetchPushshift(path)
  .then(compose(effects.onFetchNames, map(get(["data", "name"])), get(["pushshift", path])))
  .then(({ named, pushshift }) => ({ named: byName(named), pushshift: get(path, pushshift) || [] }))
  .then(({ named, pushshift }) => map(
    compose(
      ({ ps, thing }) => ({
        ...thing, data: {
          ...thing.data,
          author: thing.data.banned_by ? ps.data.author : thing.data.author,
          body: thing.data.banned_by ? ps.data.body : thing.data.body,
          body_html: thing.data.banned_by ? null : thing.data.body,
          selftext: thing.data.banned_by ? ps.data.selftext : thing.data.selftext,
          selftext_html: thing.data.banned_by ? null : thing.data.selftext_html
        }
      }),
      ({ ps, rd }) => ({
        ps, rd, thing: { ...( rd || ps), data: {
          ...ps, ...((rd && rd.data) || {}),
          banned_by: (isRemovedCheck(rd) && "moderators") || ps.data.banned_by
        }}
      }),
      ps => ({ ps, rd: get(get(["data", "name"], ps), named) })
    ),
    pushshift
  ))
  .then(things => state => ({ ...state, pushshift: { ...state.pushshift, [path]: things } }));

export const fetchPushshiftListing = (effects, path) => effects.fetchPushshiftAndReddit(path)
  .then(compose(
    normalizeListing(0, "/r/pushshift/api" + path),
    children => ({ children }), get(["pushshift", path])
  ))
  .then(listing => state => ({ ...state, listings: [listing] }));
