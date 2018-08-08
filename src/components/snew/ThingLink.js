import React, { PureComponent } from "react";
import { ThingLink as BaseThingLink } from "snew-classic-ui";
import { interceptClicks } from "../../util";
import { withRouter } from "react-router-dom";
import { Expando, getExpando } from "./Expando";
import urllite from "urllite";

const doesNothing = () => null;

class ThingLink extends PureComponent {
  constructor(props) {
    super(props);
    const { expanded = false } = props;
    this.state = { expanded };
    this.onToggleExpando = this.onToggleExpando.bind(this);
  }

  render() {
    const { props } = this;
    const urlInfo = props.url ? urllite(props.url) : {};
    const domain = props.domain;
    const { image, video, iframe, EmbedComponent } = getExpando(props, domain, urlInfo);
    const expandoType = props.body ? "selftext" : video ? "video" : image ? "video" : EmbedComponent ? "video" : iframe ? "video": null;

    const url = (props.is_self) ? props.url.replace("www.reddit.com", "snew.github.io") : props.url;

    return (
      <BaseThingLink
        {...props}
        Expando={Expando}
        onShare={doesNothing}
        onSave={doesNothing}
        onHide={doesNothing}
        onReport={doesNothing}
        onVoteUp={doesNothing}
        onVoteDown={doesNothing}
        onShare={`https://notabug.io/t/${props.subreddit.toLowerCase()}/submit?title=${props.title}&url=${url}`}
        image={image}
        video={video}
        iframe={iframe}
        expandoType={expandoType}
        expanded={this.state.expanded}
        onToggleExpando={expandoType ? this.onToggleExpando : null}
        EmbedComponent={EmbedComponent}
      />
    );
  }

  onToggleExpando() {
    this.setState({ expanded: !this.state.expanded });
  }
}

export default withRouter(interceptClicks(ThingLink));
