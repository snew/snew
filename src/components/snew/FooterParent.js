import React from "react";
import Link from "./Link";

const FooterParent = () => (
  <div className="footer-parent">
    <p className="bottommenu">I think all censorship should be deplored. My position is that <a href="http://archive.is/d4NPt">bits are not a bug</a></p>
    <p className="bottommenu">That we should create communications technologies that allow people to send whatever they like to each other.</p>
    <p className="bottommenu">And when people put their thumbs on the scale and try to say what can and can’t be sent,</p>
    <p className="bottommenu">we should fight back - both politically through protest and technologically through software</p>
    <p className="bottommenu"> — <Link href="/r/blog/comments/16h4aa/aaronsw_1986_2013/">Aaron Swartz (1986 - 2013)</Link></p>
    <a
      href="https://www.reddit.com/code/"
      title="Reddit used to be open-source.  This is what's left"
      style={{
        textAlign: "center",
        display: "inline-block",
        marginTop: "1em",
        border: "1px solid black"
      }}
    >
      <img
        alt="Powered by reddit."
        src="https://sp.reddit.com/powered_by_reddit.png"
        style={{
          width: 140,
          height: 47
        }}
      />
    </a>
    <p className="bottommenu">&nbsp;</p>
    <p className="bottommenu">
      <a href="http://archive.is/eBNaf">© 2005 not a bug</a> | <Link className="privacy" href="/privacy">Privacy Policy</Link>
    </p>
  </div>
);

export default FooterParent;
