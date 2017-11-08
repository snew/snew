import React from "react";
import { HeaderBottomLeft as BaseHeaderBottomLeft } from "snew-classic-ui";
import { injectState } from "freactal";

const HeaderBottomLeft = ({ state: {
  subreddit, subredditData, useStyle, linkDuplicates
}, ...props }) => (
  <BaseHeaderBottomLeft {...{
    ...props,
    subreddit,
    subredditData: subredditData && subredditData.data,
    useStyle,
    numOtherDiscussions: linkDuplicates && linkDuplicates.others.length
  }} />
);

export default injectState(HeaderBottomLeft);
