import React, { Component } from "react";
import "./Sidebar.css";
class Sidebar extends Component {
  state = {};
  render() {
    let { toggle } = this.props;
    let widthVal = "",
      display = "";
    if (toggle) {
      widthVal = "100%";
      display = "visible";
    } else {
      widthVal = 0;
      display = "hidden";
    }
    console.log(widthVal);
    return (
      <div id="sidebar" style={{ width: widthVal, visibility: display }}>
        <p>Ingresos</p>
        <p>Gastos</p>
        <p>Admin</p>
        <p>Perfil</p>
      </div>
    );
  }
}

export default Sidebar;
