import React from "react";
import { ThingComment as BaseThingComment } from "snew-classic-ui";

const doesNothing = () => null;

const isRemoved = body => body === "[removed]" || body === "\\[removed\\]";

const ThingComment = ({ author, body, body_html, ...props }) => {
  if (props.banned_by && isRemoved(body) && props.retrieved_on) {
    const duration = Math.max(0, props.retrieved_on - props.created_utc);
    const term = duration === 1 ? "second" : "seconds";
    const desc = duration === 0 ? "instantly" : `within ${duration} ${term}`;
    author = "[censored]";
    body = `[censored ${desc}]`;
    body_html = `<div class="md"><p>${body}</p></div>`;
  } else if (isRemoved(body)) {
    author = "[censored]";
    body_html = `<div class="md"><p>[censored]</p></div>`;
  }
  return (
    <BaseThingComment
      {...{ ...props, author, body, body_html }}
      collapsed={false}
      onShare={doesNothing}
      onSave={doesNothing}
      onShowReply={doesNothing}
      onGiveGold={doesNothing}
      onToggleExpand={doesNothing}
      onReport={doesNothing}
      onVoteUp={doesNothing}
      onVoteDown={doesNothing}
    />
  );
};

export default ThingComment;
