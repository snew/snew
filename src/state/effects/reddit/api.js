import Snoocore from "snoocore";

const reddit = new Snoocore({
  userAgent: "vforreddit 0.0.1 by go1dfish",
  oauth: {
    type: "implicit",
    mobile: false,
    duration: "temporary",
    key: "yP8VpQkHmtgcUA",
    secret: "",
    throttle: 0,
    redirectUri: "http://politicbot.github.io/#/?",
    scope: [
      "account",
      "edit",
      "history",
      "mysubreddits",
      "privatemessages",
      "report",
      "save",
      "submit",
      "subscribe",
      "vote",
      "wikiedit",
      "wikiread",
      "read",
      "flair",
      "identity",
      "modconfig"
    ]
  }
});

export default reddit;
