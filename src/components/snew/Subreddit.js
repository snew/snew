import React from "react";
import { Subreddit as BaseSubreddit } from "snew-classic-ui";
import { injectState } from "freactal";
import Spinner from "react-spinkit";

const Subreddit = ({ state: {
  subreddit, listings, isLoading, isFetching, isFetchingSubreddit, style, useStyle
}, ...props}) => [
  <BaseSubreddit {...{ ...props, subreddit, listings, style, useStyle, key: "subreddit" }} />,
  (isLoading || isFetching || isFetchingSubreddit) && (<Spinner
    key="spinner"
    name="pacman"
    color="yellow"
    fadeIn="quarter"
    style={{
      position: "fixed",
      top: "15px",
      left: 32,
      zIndex: 900000
    }}
  />)
];

export default injectState(Subreddit);
