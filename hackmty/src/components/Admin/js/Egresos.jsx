import React, { Component } from "react";
import PieChartJS from "../../charts/PieChartJS";
import "../css/Ingresos.css";
import { Card } from "../../Dashboard/Dashboard";
import Egresos from "./costos/egresos"


class Ingresos extends Component {
  state = {};

  render() {
    let { header, income } = this.props;
    return (
      <div id="ingresos">
        <Card
          header={income}
          description={"Ingresos"}
          textColor="#00DCB8"
          style={{ marginTop: "2rem !important" }}
        />
        <div
          className="card-shadow"
          style={{ width: "100%", margin: "0 1rem" }}
        >
          <Egresos />
        </div>

        <Card
          header={"Producto mas caro"}
          description="Ingresos"
          textColor="#00DCB8"
        />
        <Card
          header={"La mayor cantidad de productos"}
          description="Ingresos"
          textColor="#00DCB8"
        />
        <Card
          header={"Mejor margen"}
          description="Producto con Id 12323423"
          textColor="#00DCB8"
        />
      </div>
    );
  }
}

export default Ingresos;
