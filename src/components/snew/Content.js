import React from "react";
import { Helmet } from "react-helmet";
import { Content as BaseContent } from "snew-classic-ui";
import { injectState } from "freactal";
import get from "lodash/fp/get";
import eq from "lodash/fp/eq";
import compose from "lodash/fp/compose";

const title = (listings, subreddit) =>
  compose(eq(1), get([0, "allChildren", "length"]))(listings)
    ? `${get([0, "allChildren", 0, "data", "title"], listings)} - r/${subreddit} - snew`
    : `r/${subreddit} - snew`;

const Content = ({ state: { isLoading, subreddit, listings }, ...props }) => [
  <Helmet key="helmet">
    <title>{title(listings, subreddit)}</title>
  </Helmet>,
  !isLoading && <BaseContent {...{ ...props, listings, key: "content" }} />
];

export default injectState(Content);
