import React from "react";
import ThingComponent from "./Thing";

const ModAction = ({
  Link,
  Thing = ThingComponent,
  Timestamp,
  action,
  mod,
  description,
  details,
  created_utc,
  target_author,
  target
}) => (
  <div>
    <h2>
      {action} by <Link href={`/user/${mod}`} className="author may-blank">{mod}</Link>
      {created_utc && <Timestamp {...{ created_utc }} />}
      {description !== "null" && description} {details !== "null" && details} {target_author !== "null" && <Link href={`/user/${target_author}`} className="author may-blank">{target_author}</Link>}
    </h2>
    {target && <Thing expanded {...target} />}
    <hr/>
  </div>
);

export default ModAction;
