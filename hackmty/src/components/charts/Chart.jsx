import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import "./Chart.css";
export default class Chart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          id="chart-js"
          fontSize=".6rem"
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: -20,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#B4C5F1" fill="#B4C5F1" />
          <Area type="monotone" dataKey="pv" stroke="#8972DA" fill="#8972DA" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

const data = [
  {
    name: "JAN",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "FEB",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "MAR",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "APR",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "MAY",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "JUN",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "JUL",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "AUG",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "SEPT",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "OCT",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "NOV",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "DEC",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
