import React from "react";
import { UserInfo as BaseUserInfo } from "snew-classic-ui";
import { injectState } from "freactal";

const UserInfo = (props) => (
  <BaseUserInfo {...{
    ...props,
    username: "go1dfish",
    link_karma: 62388
  }} />
);

export default injectState(UserInfo);
