import Promise from "promise";
import reddit from "./api";
import compose from "lodash/fp/compose";
import get from "lodash/fp/get";
import { map } from "../../../util";
import { normalizeListing } from "./util";
import { update } from "freactal";
import { entities } from "../../../components/snew/Markdown";

export const setListingSortType = (effects, listingSort) => state => ({ ...state, listingSort });

export const onFetchRedditListing = (effects, path, params={}) => {
  let { count=0, limit=100, ...apiParams } = params;
  if (params.before) count = parseInt(count, 10) - limit - 1;
  return reddit(path).get({ limit, ...apiParams })
    .then(compose(
      map(compose(normalizeListing(parseInt(count, 10), path, params), get("data"))),
      result => result.length ? result : [result]
    ))
    .then(listings => state => ({ ...state, listings }));
};

export const onFetchThings = (effects, path, params={}, listingIndex=0) =>
  reddit(path)
    .listing({ limit: 100, ...params }, { listingIndex })
    .then(normalizeListing(0, path, params))
    .then(listing => state => ({ ...state, [path]: listing }));

export const onFetchNames = (effects, names) => {
  const batches = [], results = [];
  names = names.slice();
  while (names.length) batches.push(names.splice(0, 100));
  if (!batches.length) return state => state;
  return Promise.all(batches.map(names => effects
    .onFetchThings("/api/info", { id: names.join(",") })
    .then(get(["/api/info", "allChildren"]))
    .then(map(item => results.push(item)))
  )).then(() => state => ({ ...state, named: results }));
};

export const onFetchSubreddit = (effects, subreddit) =>
  reddit(`/r/${subreddit}/about`).get()
    .then(subredditData => state => ({ ...state, subredditData }));

const stylesheetFileRegExp = str => str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
export const onFetchStylesheet = (effects, subreddit) =>
  reddit(`/r/${subreddit}/about/stylesheet`).get()
    .then(({ data: { stylesheet = "", images = [], ...data } }) => {
      stylesheet = images.reduce((css, { link, url }) => {
        const regex = new RegExp(stylesheetFileRegExp(link), "g");
        return css.replace(regex, `url("${url}")`);
      }, entities.decode(stylesheet));
      return { ...data, stylesheet, images };
    })
    .then((style) => state => ({ ...state, style }));

export const setStyleEnabled = update(state => ({ ...state, useStyle: true }));
export const setStyleDisabled = update(state => ({ ...state, useStyle: false }));
export const _setSubreddit = update((state, subreddit) =>
  ({ ...state, subreddit, style: {}, subredditData: {} }));
export const setSubreddit = (effects, newSubreddit) => effects.then()
  .then(({ subreddit }) => (subreddit === newSubreddit) ? state => state : effects.then()
    .then(() => effects.setIsFetchingSubreddit(true))
    .then(() => effects._setSubreddit(newSubreddit))
    .then(() => newSubreddit && newSubreddit !== "all" && Promise.all([
      effects.onFetchSubreddit(newSubreddit),
      effects.onFetchStylesheet(newSubreddit)
    ]))
    .then(() => effects.setIsFetchingSubreddit(false))
    .then(() => state => ({ ...state, subreddit: newSubreddit }))
    .catch(effects.handleError));
