import React from "react";
import { injectState } from "freactal";
import get from "lodash/fp/get";

const CommentAreaTitle = ({ state: { listings, removedComments, pushshiftComments }}) => (
  <div className="panestack-title">
    {removedComments ? (
      <span className="title">
        {get([0, "allChildren", 0, "data", "num_comments"], listings)} comments{" "}
        {(pushshiftComments && Object.keys(pushshiftComments).length) || 0} scanned{" "}
        {(removedComments && Object.keys(removedComments).length) || 0} [removed]
      </span>
    ) : (
      <span className="title">
        {get([0, "allChildren", 0, "data", "num_comments"], listings)} comments
      </span>
    )}
  </div>
);

export default injectState(CommentAreaTitle);
