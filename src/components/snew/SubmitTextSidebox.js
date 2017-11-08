import React from "react";
import { SubmitTextSidebox as BaseTextSidebox } from "snew-classic-ui";
import { injectState } from "freactal";

const SubmitTextSidebox = ({ state: { subreddit }, ...props}) => (
  <BaseTextSidebox {...{ ...props, subreddit }} />
);

export default injectState(SubmitTextSidebox);

