import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div id="navbar">
        <div id="left">
          <p>LOGO</p>
        </div>
        <div id="right">
          <button class="btn btn-purple">Iniciar Sesion</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
