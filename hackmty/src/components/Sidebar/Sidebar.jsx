import React, { Component } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
class Sidebar extends Component {
  state = {};
  render() {
    let { toggle, onMenu } = this.props;
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
        <NavLink to="/" onClick={() => onMenu()}>
          <p>Dashboard</p>
        </NavLink>
        <NavLink to="/ingresos" onClick={() => onMenu()}>
          <p>Ingresos</p>
        </NavLink>
        <NavLink to="/egresos" onClick={() => onMenu()}>
          <p>Egresos</p>
        </NavLink>
        <p>Admin</p>
        <NavLink to="/profile" onClick={() => onMenu()}>
          <p>Perfil</p>
        </NavLink>
      </div>
    );
  }
}

export default Sidebar;
