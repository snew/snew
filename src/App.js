import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { navMount, getSubreddit } from "./util";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { Subreddit, Content } from "./components/snew";
import { app, listing, subreddit, modlog } from "./state";

const SubredditComponent = subreddit(Subreddit);
const Blank = () => <div className="content" role="main"><h1>This kind of page is not yet supported.  Sorry =(</h1></div>;

const SubredditRoute = (props) => (
  <SubredditComponent {...props}>
    <Switch>
      <Route path="/submit" component={Blank} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/r/:subreddit/about/log/" component={navMount(modlog(Content))} />
      <Route path="/r/:subreddit/submit" component={Blank} />
      <Route path="/r/:subreddit/:link_view/:link_id/" component={navMount(listing(Content))} />
      <Route path="/r/:subreddit/:link_view/:link_id/" component={navMount(listing(Content))} />
      <Route path="/r/:subreddit/:sort_type/" component={navMount(listing(Content))} />
      <Route path="/r/:subreddit" component={navMount(listing(Content))} />
      <Route path="/*" component={navMount((listing(Content)))} />
    </Switch>
  </SubredditComponent>
);

const Reddit = (() => (
  <Switch>
    <Route path="/user/go1dfish" exact={true} render={() => <Redirect to="/search?q=author:go1dfish"/> } />
    <Route path="/gold" exact={true} render={() => <Redirect to="/search?q=author:go1dfish"/> } />
    <Route path="/prefs" exact={true} render={() => <Redirect to="/r/modnews/comments/ov7rt/moderators_feedback_requested_on_enabling_public/"/> } />
    <Route path="/message/inbox" exact={true} render={() => <Redirect to="/r/WatchRedditDie"/> } />
    <Route path="/subreddits" exact={true} render={() => <Redirect to="/r/subredditcancer"/> } />
    <Route path="/submit" component={Blank} />
    <Route path="/r/:subreddit" component={navMount(SubredditRoute, getSubreddit)} />
    <Route path="/user/:username" component={navMount(SubredditRoute)} />
    <Route path="/" exact={true} render={() => <Redirect to="/r/all"/> } />
    <Route path="/*" component={navMount(SubredditRoute)} />
  </Switch>
));

const App = app(() =>  <ScrollToTop><Reddit /></ScrollToTop>);

export default () => <BrowserRouter><App /></BrowserRouter>;
