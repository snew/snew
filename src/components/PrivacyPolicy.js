import React from "react";

const PrivacyPolicy = () => (
  <div id="content" role="main">
    <div className="usertext">
      <div className='md'>
        <h1>Privacy Policy</h1>
        <h4>
          This is separate from <a href='https://www.reddit.com/help/privacypolicy'>reddit.com's Privacy Policy</a>
        </h4>
        <p>This javascript app runs entirely in your browser and never phones home.</p>
        <p>There is no home to phone, this app has no backend of its own and can be hosted anywhere.</p>
        <p>The <a href='https://www.reddit.com/api'>reddit api</a> (oauth.reddit.com) is used to grab up to date content from reddit for display</p>
        <p><a href="https://pushshift.io">pushshift.io</a>'s api (api.pushshift.io) is used to fetch
          historical reddit data for the purposes of restoring moderator [removed] content.
          <br/>Pushshift is also used for comment search functionality.
        </p>
        <p>You can verify this using your browser's network inspector.</p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
