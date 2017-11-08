import React from "react";
import { ThingLink as BaseThingLink } from "snew-classic-ui";
import { interceptClicks } from "../../util";
import { withRouter } from "react-router-dom";

const ThingLink = (props) => (
  <BaseThingLink {...props} />
);

export default withRouter(interceptClicks(ThingLink));
