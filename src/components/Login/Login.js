import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  state = {};
  render() {
    return (
      <div id="login">
        <div className="login-container" style={{ flexDirection: "column" }}>
          <h1 className="font-semi-bold">Bienvenido</h1>
          <input value="" placeholder="usuario"></input>
          <div id="inputs">
            <input type="password" value="" placeholder="contraseña"></input>
            <button style={{ marginTop: "1rem" }} class="btn btn-purple">
              Iniciar Sesion
            </button>
            <br />
            <button class="btn btn-green">Crear Cuenta</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
