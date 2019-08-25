import React, { Component } from "react";
import PieChartJS from "../../charts/PieChartJS";
import "../css/Ingresos.css";
import { Card } from "../../Dashboard/Dashboard";
import Egresos from "./costos/egresos";
import upload_gasto from "../../upload/upload_gasto";

class Ingresos extends Component {
  state = {};

  render() {
    let { header, income } = this.props;
    return (
      <div id="ingresos">
        <Card>
          <upload_gasto />
        </Card>
        <Card
          header={income}
          description={"Egresos"}
          textColor="#00DCB8"
          style={{ marginTop: "2rem !important" }}
        />

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

        <div
          className="card-shadow"
          style={{ width: "100%", margin: "0 1rem" }}
        >
          <Egresos />
        </div>


      </div>
    );
  }
}

export default Ingresos;
