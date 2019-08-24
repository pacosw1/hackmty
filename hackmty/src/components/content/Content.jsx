import React, { Component } from "react";
import "./Content.css";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
class Content extends Component {
  state = {};
  render() {
    return (
      <div id="content-div">
        <Dashboard />

        {/* <Login /> */}
      </div>
    );
  }
}

export default Content;
