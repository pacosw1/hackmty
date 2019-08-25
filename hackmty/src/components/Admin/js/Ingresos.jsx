import React, { Component } from "react";
import PieChartJS from "../../charts/PieChartJS";
import "../css/Ingresos.css";
import { Card } from "../../Dashboard/Dashboard";
import Ingresos2 from "./ingresos/Ingresos2"


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
      

        <Card
          header={"Producto mas popular"}
          description="Ingresos"
          textColor="#00DCB8"
        />
        <Card
          header={"Mas Vendido"}
          description="Ingresos"
          textColor="#00DCB8"
        />
        <Card
          header={"Mejor margen"}
          description="Producto con Id 12323423"
          textColor="#00DCB8"
        />

        <div
          className="card-shadow"
          style={{ width: "100%", margin: "0 1rem" }}
        >
          <Ingresos2 />
        </div>

      </div>
    );
  }
}

export default Ingresos;
