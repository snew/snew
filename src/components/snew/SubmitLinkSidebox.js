import React from "react";
import { SubmitLinkSidebox as BaseLinkSidebox } from "snew-classic-ui";
import { injectState } from "freactal";

const SubmitLinkSidebox = ({ state: { subreddit }, ...props}) => (
  <BaseLinkSidebox {...{ ...props, subreddit }} />
);

export default injectState(SubmitLinkSidebox);
