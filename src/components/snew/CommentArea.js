import React from "react";
import { CommentArea as BaseCommentArea } from "snew-classic-ui";
import { injectState } from "freactal";
import get from "lodash/fp/get";
import constant from "lodash/fp/constant";
import { or } from "../../util";

const getNestedComments = or(get([1, "allChildren"]), constant([]));

const CommentArea = ({ state: { listings }, ...props }) => (
  <BaseCommentArea {...{ ...props, locked: true, allChildren: getNestedComments(listings) }} />
);

export default injectState(CommentArea);
