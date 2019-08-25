import React, { Component } from "react";

import logo from "../logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Content from "./content/Content";
import "../design-system.css";
import Sidebar from "./Sidebar/Sidebar";
let _ = require("lodash");
let axios = require("./config/axios");

class App extends Component {
  state = {
    sidebarToggle: false,
    costs: []
  };
  async componentDidMount() {
    // let res = await axios.getData("TAF100112H1A/gastos/2019");
    // let incomeRes = await axios.getData("TAF100112H1A/ingresos/");
    let graphData = await axios.getData("graphs/TAF100112H1A/2019");
    // console.log(res.length);

    // let fix = res.map(record => {
    //   record.cost = record.cost.replace(/,/g, ".");
    //   record.cost = record.cost * record.quantity;
    //   return _.pick(record, ["cost", "month"]);
    // });
    // // let incomes = incomeRes.map(record => {
    //   record.total = record.total.replace(/,/g, ".");
    //   record.total = record.total * "1";
    //   return _.pick(record, ["total", "month"]);
    // });

    let countIncome = 0;
    let countCost = 0;
    let incomeRes = graphData.data.map(month => {
      countCost += month.Gastos;
      countIncome += month.Ingresos;
    });

    console.log(countIncome);
    // let summedIncomes = _(incomes)
    //   .groupBy("month")
    //   .map((objs, key) => {
    //     return {
    //       month: key,
    //       Ingresos: _.sumBy(objs, "total").toFixed(2)
    //     };
    //   })
    //   .value();
    // let summed = _(fix)
    //   .groupBy("month")
    //   .map((objs, key) => {
    //     return {
    //       month: key,
    //       Gastos: _.sumBy(objs, "cost").toFixed(2)
    //     };
    //   })
    //   .value();
    // let sum = 0;
    // console.log(summed);

    // fix.forEach(record => {
    //   sum += parseFloat(record.cost);
    // });
    // let incomeSum = 0;
    // incomes.forEach(record => {
    //   incomeSum += parseFloat(record.total);
    // });

    // incomeSum = incomeSum.toFixed(2);
    // sum = sum.toFixed(2);

    // let profit = incomeSum - sum;
    // profit = parseFloat(profit).toLocaleString();
    // incomeSum = parseFloat(incomeSum).toLocaleString();

    let final = (
      parseFloat(countIncome) - parseFloat(countCost)
    ).toLocaleString();
    countCost = parseFloat(countCost).toLocaleString();
    countIncome = parseFloat(countIncome).toLocaleString();

    // console.log(final);

    // console.log(incomeSum);

    this.setState({
      cost: countCost,
      profit: final,
      income: countIncome,
      chartData: graphData.data
    });
  }

  toggleMenu = () => {
    let { sidebarToggle } = this.state;
    console.log(sidebarToggle);
    this.setState({
      sidebarToggle: !sidebarToggle
    });
  };
  render() {
    let { profit, cost, income, chartData } = this.state;
    return (
      <div className="App">
        <Navbar onMenu={this.toggleMenu} />
        <Sidebar toggle={this.state.sidebarToggle} onMenu={this.toggleMenu} />
        <Content
          profit={profit}
          income={income}
          cost={cost}
          chartData={chartData}
        />
      </div>
    );
  }
}

export default App;
