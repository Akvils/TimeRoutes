import React from "react";
import { Link } from "react-router-dom";
import { TimelineItem } from "vertical-timeline-component-for-react";
import moment from "moment";

const Timeroute = props => (
  <TimelineItem
    key="001"
    dateText={moment(props.timeroute.timeroute_date).format("Do MMMM YYYY")}
    style={{ color: "#664366" }}
    dateInnerStyle={{ background: "#664366" }}
    bodyContainerStyle={{
      background: "#F5F7FA",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0.5rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)"
    }}
  >
    <h3>{props.timeroute.timeroute_title}</h3>
    <p className={props.timeroute.timeroute_completed ? "completed" : ""}>
      {props.timeroute.timeroute_description}
    </p>
    <h4
      style={{ color: "#e91e63" }}
      className={props.timeroute.timeroute_completed ? "completed" : ""}
    >
      Responsible: {props.timeroute.timeroute_responsible}
    </h4>
    <h5
      style={{ color: "#009688" }}
      className={props.timeroute.timeroute_completed ? "completed" : ""}
    >
      Priority: {props.timeroute.timeroute_priority}
    </h5>
    <p style={{ color: "#61b8ff", float: "right" }}>
      <Link to={"/edit/" + props.timeroute._id}>Edit</Link>
    </p>
  </TimelineItem>
);

export default Timeroute;
