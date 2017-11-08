import React from "react";
import { SidebarSearch as BaseSidebarSearch } from "snew-classic-ui";
import { injectState } from "freactal";

const SidebarSearch = ({ state: { subreddit }}) => (
  <BaseSidebarSearch {...{ subreddit }} />
);

export default injectState(SidebarSearch);
