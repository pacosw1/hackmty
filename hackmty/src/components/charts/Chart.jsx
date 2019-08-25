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
    let { data } = this.props;

    return (
      <ResponsiveContainer width="100%" height={360}>
        <AreaChart
          id="chart-js"
          fontSize=".6rem"
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />

          <YAxis
            dataKey="Ingresos"
            tickFormatter={tick => {
              return tick.toLocaleString();
            }}
          />
          <Tooltip
            formatter={value => new Intl.NumberFormat("en").format(value)}
          />
          <Area
            type="monotone"
            dataKey="Ingresos"
            stroke="#00C2A2"
            fill="#00C2A2"
          />
          <Area
            type="monotone"
            dataKey="Gastos"
            stroke="#FF6666"
            fill="#FF6666"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
