import React, { Component } from "react";
import Chart from "../charts/Chart";
import "./Dashboard.css";
import { __values } from "tslib";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
let _ = require("lodash");
let axios = require("../config/axios");

class Dashboard extends Component {
  state = {
    costs: 0
  };

  render() {
    let { chartData, profit, income, cost } = this.props;
    return (
      <div id="dashboard">
        <h1
          style={{
            fontSize: "2rem",
            margin: ".5rem 0rem",
            marginLeft: "1.5rem"
          }}
        >
          Dashboard
        </h1>

        <div id="header">
          <Card header={profit} textColor="#04B49A" description="Ganancia" />

          <Card header={income} description="Ingresos" textColor="#00DCB8" />
          <Card header={cost} textColor="#FF4949" description="Gastos" />
        </div>
        <div
          className="card-shadow"
          style={{ width: "100%", margin: "0 1rem" }}
        >
          <Chart data={chartData} />
        </div>
      </div>
    );
  }
}
export const Card = props => {
  let { header, description, textColor } = props;
  return (
    <div
      className="md-up:w-1/3 md-up:mx-2 mb-1 card-shadow"
      style={{
        backgroundColor: " red !important"
      }}
    >
      <NavLink>
        <h4 className="h4 mb-1">
          <h1 style={{ color: `${textColor}` }}>{header}</h1>
        </h4>
        <p className="text-gray-light">{description}</p>
      </NavLink>
    </div>
  );
};

export default Dashboard;
