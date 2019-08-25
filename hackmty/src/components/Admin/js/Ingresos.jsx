import React, { Component } from "react";
import PieChartJS from "../../charts/PieChartJS";
import "../css/Ingresos.css";
import { Card } from "../../Dashboard/Dashboard";
class Ingresos extends Component {
  state = {};

  render() {
    let { header, income } = this.props;
    return (
      <div id="ingresos">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignSelf: "flex-start"
          }}
        >
          <button
            style={{ alignSelf: "flex-start", margin: "2rem 0rem" }}
            class="btn btn-green"
          >
            Añadir Ingreso
          </button>

          <button
            style={{ alignSelf: "flex-start", margin: "2rem 0rem" }}
            class="btn btn-purple-outline"
          >
            Ir al Catalogo
          </button>
        </div>
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
          <PieChartJS />
        </div>

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
      </div>
    );
  }
}

export default Ingresos;
