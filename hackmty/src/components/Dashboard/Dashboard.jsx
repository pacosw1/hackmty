import React, { Component } from "react";
import Chart from "../charts/Chart";
import "./Dashboard.css";
import { __values } from "tslib";
let _ = require("lodash");
let axios = require("../config/axios");

class Dashboard extends Component {
  state = {
    costs: 0,
    chartData: []
  };

  async componentDidMount() {
    let res = await axios.getData("TAF100112H1A/gastos/2019");
    let incomeRes = await axios.getData("TAF100112H1A/ingresos/2019");
    console.log(res.length);

    let fix = res.map(record => {
      record.cost = record.cost.replace(/,/g, ".");
      record.cost = record.cost * record.quantity;
      return _.pick(record, ["cost", "month"]);
    });
    let incomes = incomeRes.map(record => {
      record.total = record.total.replace(/,/g, ".");
      record.total = record.total * record.quantity;
      return _.pick(record, ["total", "month"]);
    });

    let summedIncomes = _(incomes)
      .groupBy("month")
      .map((objs, key) => {
        return {
          month: key,
          income: _.sumBy(objs, "total").toFixed(2)
        };
      })
      .value();
    let summed = _(fix)
      .groupBy("month")
      .map((objs, key) => {
        return {
          month: key,
          cost: _.sumBy(objs, "cost").toFixed(2)
        };
      })
      .value();
    let sum = 0;
    console.log(summed);

    fix.forEach(record => {
      sum += parseFloat(record.cost);
    });
    sum = sum.toFixed(2);

    sum = parseFloat(sum).toLocaleString();

    let final = _.merge(summedIncomes, summed);
    console.log(final);

    console.log(summedIncomes);

    this.setState({ costs: sum, chartData: final });
  }
  render() {
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
          <Card header="$100.00" textColor="#04B49A" description="Ganancia" />
          <Card header="$200.00" description="Ingresos" textColor="#00DCB8" />
          <Card
            header={this.state.costs}
            textColor="#FF4949"
            description="Gastos"
          />
        </div>
        <div
          className="card-shadow"
          style={{ width: "100%", margin: "0 1rem" }}
        >
          <Chart data={this.state.chartData} />
        </div>
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

export default Dashboard;
