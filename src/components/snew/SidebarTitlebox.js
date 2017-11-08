/* eslint import/no-webpack-loader-syntax: off */
import README from "!raw-loader!../../README.md";
import React from "react";
import get from "lodash/fp/get";
import constant from "lodash/fp/constant";
import { or } from "../../util";
import { SidebarTitlebox as BaseTitlebox } from "snew-classic-ui";
import { injectState } from "freactal";

const SidebarTitlebox = ({
  state: {
    subreddit,
    useStyle,
    subredditData,
  },
  effects: {
    setStyleEnabled,
    setStyleDisabled
  },
  ...props
}) => (
  <BaseTitlebox {...{
    ...props,
    ...((subredditData && subredditData.data) || {}),
    subreddit: (subreddit === "all") ? null: subreddit,
    useStyle,
    description: or(
      get(["data", "description"]),
      constant(README)
    )(subredditData),
    description_html: get("data", "description_html", subredditData),
    subredditData,
    setStyleEnabled,
    setStyleDisabled
  }} />
);

export default injectState(SidebarTitlebox);
