import React, { Component } from "react";
import "./Content.css";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";
import { Route } from "react-router-dom";
import Catalogo from "../Admin/js/Catalogo";
import Form from "../Admin/js/Form";
import Ingresos from "../ingresos/Ingresos";
let fields = require("../config/fields");

class Content extends Component {
  state = {};
  render() {
    return (
      <div id="content-div">
        <Sidebar />
        <Route
          exact
          path="/manage/catalog/egresos"
          render={props => (
            <Catalogo
              header="Egresos"
              fields={[...fields.egresos]}
              {...props}
            />
          )}
        />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Dashboard} />
        <Route path="/ingresos" exact component={Ingresos} />

        <Route
          exact
          path="/manage/catalog/egresos/get/:id"
          render={props => (
            <Form
              header="Egresos"
              fields={[...fields.egresos]}
              edit={true}
              {...props}
            />
          )}
        />
        <Route
          path="/manage/catalog/egresos/new"
          render={props => (
            <Form
              header="Egresos"
              fields={[...fields.egresos]}
              edit={false}
              {...props}
            />
          )}
        />
        {/* <Login /> */}
      </div>
    );
  }
}

export default Content;
