import React, { Component } from "react";
import "../css/FormIng.css";
import { Card } from "../../Dashboard/Dashboard";

class FormIng extends Component {
  state = {};
  render() {
    let { fields, header } = this.props;
    let list = [];
    if (fields) {
      list = fields.map(field => {
        return <input placeholder={field} name={field} />;
      });
    } else {
      list = [];
    }
    return (
      <div id="form-data">
        <Card header={header} />
        {list}
        <button
          style={{ alignSelf: "flex-start", margin: "2rem 0rem" }}
          class="btn btn-purple"
        >
          Añadir Ingreso
        </button>
      </div>
    );
  }
}

export default FormIng;
