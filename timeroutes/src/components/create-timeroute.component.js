import React, { Component } from "react";
import axios from "axios";

export default class CreateTimeroute extends Component {
  constructor(props) {
    super(props);

    this.onChangeTimerouteTitle = this.onChangeTimerouteTitle.bind(this);
    this.onChangeTimerouteDescription = this.onChangeTimerouteDescription.bind(
      this
    );
    this.onChangeTimerouteResponsible = this.onChangeTimerouteResponsible.bind(
      this
    );
    this.onChangeTimeroutePriority = this.onChangeTimeroutePriority.bind(this);
    this.onChangeTimerouteDate = this.onChangeTimerouteDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      timeroute_title: "",
      timeroute_description: "",
      timeroute_responsible: "",
      timeroute_priority: "",
      timeroute_date: "",
      timeroute_completed: false
    };
  }

  onChangeTimerouteTitle(e) {
    this.setState({
      timeroute_title: e.target.value
    });
  }

  onChangeTimerouteDescription(e) {
    this.setState({
      timeroute_description: e.target.value
    });
  }

  onChangeTimerouteResponsible(e) {
    this.setState({
      timeroute_responsible: e.target.value
    });
  }

  onChangeTimeroutePriority(e) {
    this.setState({
      timeroute_priority: e.target.value
    });
  }

  onChangeTimerouteDate(e) {
    this.setState({
      timeroute_date: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Timeroute Title: ${this.state.timeroute_title}`);
    console.log(`Timeroute Description: ${this.state.timeroute_description}`);
    console.log(`Timeroute Responsible: ${this.state.timeroute_responsible}`);
    console.log(`Timeroute Priority: ${this.state.timeroute_priority}`);
    console.log(`Timeroute Date: ${this.state.timeroute_date}`);
    console.log(`Timeroute Completed: ${this.state.timeroute_completed}`);

    const newTimeroute = {
      timeroute_title: this.state.timeroute_title,
      timeroute_description: this.state.timeroute_description,
      timeroute_responsible: this.state.timeroute_responsible,
      timeroute_priority: this.state.timeroute_priority,
      timeroute_date: this.state.timeroute_date,
      timeroute_completed: this.state.timeroute_completed
    };

    axios
      .post("http://localhost:4000/timeroutes/add", newTimeroute)
      .then(res => console.log(res.data));

    this.setState({
      timeroute_title: "",
      timeroute_description: "",
      timeroute_responsible: "",
      timeroute_priority: "",
      timeroute_date: "",
      timeroute_completed: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Timeroute</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.timeroute_title}
              onChange={this.onChangeTimerouteTitle}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.timeroute_description}
              onChange={this.onChangeTimerouteDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.timeroute_responsible}
              onChange={this.onChangeTimerouteResponsible}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.timeroute_date}
              onChange={this.onChangeTimerouteDate}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.timeroute_priority === "Low"}
                onChange={this.onChangeTimeroutePriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.timeroute_priority === "Medium"}
                onChange={this.onChangeTimeroutePriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.timeroute_priority === "High"}
                onChange={this.onChangeTimeroutePriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Timeroute"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
