import React from "react";
import ModActionComponent from "./ModAction";

const Thing = ({
  ThingLink,
  ThingComment,
  ModAction = ModActionComponent,
  kind,
  data,
  rank,
  expanded,
  ...props
}) => {
  const Component = ({ t3: ThingLink, t1: ThingComment, modaction: ModAction })[kind];
  return Component ? <Component expanded={expanded} {...{ ...props, ...data, rank }} /> : null;
};

export default Thing;
