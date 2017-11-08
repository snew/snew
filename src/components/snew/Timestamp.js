import React from "react";
import TimeAgo from "react-timeago";

const Timestamp = ({ created_utc }) => (created_utc && <TimeAgo date={created_utc * 1000} />) || null;
export default Timestamp;
