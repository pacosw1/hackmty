import React, { Component } from "react";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div id="dashboard">
        <div id="header">
          <Card header="$100.00" textColor="#04B49A" description="Ganancia" />
          <Card header="$200.00" description="Ingresos" textColor="#00DCB8" />
          <Card header="$100.00" textColor="#FF4949" description="Gastos" />
        </div>
        <Chart />
      </div>
    );
  }
}
const Card = props => {
  let { header, description, textColor } = props;
  return (
    <div className="md-up:w-1/3 md-up:mx-2 mb-1 card-shadow">
      <h4 className="h4 mb-1">
        <h1 style={{ color: `${textColor}` }}>{header}</h1>
      </h4>
      <p className="text-gray-light">{description}</p>
    </div>
  );
};

const Chart = props => {
  return (
    <div id="chart">
      <Card header="$100.00" textColor="#FF4949" description="Gastos" />
    </div>
  );
};

export default Dashboard;
