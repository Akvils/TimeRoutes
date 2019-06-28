import React, { Component } from "react";
import axios from "axios";
import Timeroute from "./timeroute.component";
import { Timeline } from "vertical-timeline-component-for-react";

// const Timeroute = props => (
//   <tr>
//     <td className={props.timeroute.timeroute_completed ? "completed" : ""}>
//       {props.timeroute.timeroute_title}
//     </td>
//     <td className={props.timeroute.timeroute_completed ? "completed" : ""}>
//       {props.timeroute.timeroute_description}
//     </td>
//     <td className={props.timeroute.timeroute_completed ? "completed" : ""}>
//       {props.timeroute.timeroute_responsible}
//     </td>

//     <td className={props.timeroute.timeroute_completed ? "completed" : ""}>
//       {props.timeroute.timeroute_priority}
//     </td>
//     <td className={props.timeroute.timeroute_completed ? "completed" : ""}>
//       {props.timeroute.timeroute_date}
//     </td>
//     <td>
//       <Link to={"/edit/" + props.timeroute._id}>Edit</Link>
//     </td>
//   </tr>
// );

export default class TimeroutesList extends Component {
  constructor(props) {
    super(props);
    this.state = { timeroutes: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/timeroutes/")
      .then(response => {
        this.setState({ timeroutes: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:4000/timeroutes/")
      .then(response => {
        this.setState({ timeroutes: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  timerouteList() {
    return this.state.timeroutes
      .map(function(currentTimeroute, i) {
        return <Timeroute timeroute={currentTimeroute} key={i} />;
      })
      .reverse();
  }

  render() {
    return (
      <div>
        <h2 style={{ marginTop: 20, textAlign: "center" }}>My Timeline</h2>

        <Timeline lineColor={"#ddd"}>{this.timerouteList()}</Timeline>
      </div>
    );
  }
}
