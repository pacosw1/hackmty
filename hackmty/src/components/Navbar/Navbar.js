import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    let { onMenu } = this.props;
    return (
      <div id="navbar">
        <div id="left">
          <button class="btn btn-purple-outline" onClick={() => onMenu()}>
            Menu
          </button>
        </div>
        <div id="right">
          <button class="btn btn-purple">Iniciar Sesion</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
