import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTimeroute from "./components/create-timeroute.component";
import EditTimeroute from "./components/edit-timeroute.component";
import TimeroutesList from "./components/timeroutes-timeline.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" target="_blank">
              <img src={logo} width="30" height="30" alt="website url" />
            </a>
            <Link to="/" className="navbar-brand">
              Time Routes
            </Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link
                    to="/create"
                    className="nav-link"
                    // style={{
                    //   border: "1px solid #664366",
                    //   borderRadius: "4px"
                    // }}
                  >
                    Create Timeroute
                  </Link>
                </li>
                {/* <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    About
                  </Link>
                </li> */}
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TimeroutesList} />
          <Route path="/edit/:id" component={EditTimeroute} />
          <Route path="/create" component={CreateTimeroute} />
        </div>
      </Router>
    );
  }
}

export default App;
