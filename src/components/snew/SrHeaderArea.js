
import React from "react";

const SrHeaderArea = ({
  Link,
  subreddits=[
    "SubredditCancer",
    "WatchRedditDie",
    "RedditCensors",
    "undelete",
    "longtail",
    "Decred"
  ]
}) => (
  <div id="sr-header-area">
    <div className="width-clip">
      <div className="dropdown srdrop"
        style={{ backgroundColor: "#FF4500", marginRight: "1em" }}
      >
        <a href="https://notabug.io">
          <span
            className="selected title"
            style={{ fontWeight: "bold", color: "white", paddingLeft: "1em", paddingRight: "1em", background: "transparent" }}
          >&raquo;&raquo;&raquo;try notabug.io a p2p reddit alternative&laquo;&laquo;&laquo;</span>
        </a>
      </div>
      <div className="drop-choices srdrop">
        <Link className="choice" href="/r/all/">
          all
        </Link>
        <Link
          className="bottom-option choice"
          href="/subreddits/"
        >
          edit subscriptions
        </Link>
      </div>
      <div className="sr-list">
        <ul className="flat-list sr-bar hover">
          <li>
            <Link className="choice" href="/r/all">
              all
            </Link>
          </li>
          <li>
            <span className="separator">-</span>
            <a className="random choice" href="https://voat.co/v/MeanwhileOnReddit/">
              voat
            </a>
          </li>
          <li>
            <span className="separator">-</span>
            <a className="random choice" href="https://raddle.me/">
              raddle
            </a>
          </li>
        </ul>
        <span className="separator"> | </span>
        <ul className="flat-list sr-bar hover">
          {subreddits.map((sr, idx) => (
            <li key={sr}>
              {(idx && <span className="separator">-</span>) || null}
              <Link className="choice" href={`/r/${sr}/`}>{sr}</Link>
            </li>
          ))}
        </ul>
        <span className="separator"> | </span>
        <ul className="flat-list sr-bar hover" id="sr-bar" />
      </div>
      {/*<Link href="/subreddits/" id="sr-more-link">
        edit »
      </Link>*/}
    </div>
  </div>
);

export default SrHeaderArea;

