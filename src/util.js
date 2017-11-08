import React, {  Component } from "react";
import urllite from "urllite/lib/core";
import eq from "lodash/fp/eq";
import get from "lodash/fp/get";
import curry from "lodash/fp/curry";
import reduce from "lodash/fp/reduce";
import constant from "lodash/fp/constant";

export const lc = (s) => (s || "").toLowerCase();
export const map = curry((fn, items) => (items || []).map(fn));
export const not = fn => (...args) => !fn(...args);
export const bool = fn => (...args) => !fn(...args);
export const or = (...fns) => (...args) => {
  let result;
  return fns.find(fn => result = fn(...args)) ? result : false;
};
export const and = (...fns) => (...args) => {
  let result;
  return !fns.find((fn, idx) => idx === 0 ? !(result = fn(...args)) : !fn(...args)) ? result : false;
};

export const concat = (...fns) => (...args) => reduce(
  (all, fn) => (all || []).concat(fn(...args) || []), [], fns
);

// https://stackoverflow.com/a/6021027
export const updateQueryStringParam = (uri, key, value) => {
  const re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  const separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) return uri.replace(re, "$1" + key + "=" + value + "$2");
  return uri + separator + key + "=" + value;
};

export const getFullPath = (props) => props.location.pathname + props.location.search;
export const getSubreddit = or(get(["match", "params", "subreddit"]), constant("front"));
export const navMount = (ToWrap, keyFn = getFullPath) => (props) =>
  <ToWrap {...{...props, key: keyFn(props) }} />;

export const interceptClicks = (
  ToWrap, domainsToIntercept=["www.reddit.com", "reddit.com", "np.reddit.com", "snew.github.io", "ceddit.com", "www.ceddit.com"]
) => class ClickInterceptor extends Component {
  render() {
    return <ToWrap {...{...this.props, onClick: this.onClick.bind(this) }} />;
  }

  onClick(e) {
    let el = e.target;
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || (e.button !== 0)) return;
    while (el && el.nodeName !== "A") el = el.parentNode;
    if (!el || (el.target && el.target !== "_self") || el.attributes.download) return;
    if (el.rel && /(?:^|\s+)external(?:\s+|$)/.test(el.rel)) return;
    const url = urllite(el.href);
    const windowURL = urllite(window.location.href);
    const path = url.pathname
      + (url.search.length > 1 ? url.search : "")
      + (url.hash.length > 1 ? url.hash : "");
    if (url.host !== windowURL.host && !domainsToIntercept.find(eq(url.host.toLowerCase()))) return;
    this.props.history.push(path);
    el.blur();
    e.preventDefault();
  }
};
