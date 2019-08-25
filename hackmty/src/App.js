import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/content/Content";
import "./design-system.css";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends Component {
  state = {
    sidebarToggle: false,
    costs: []
  };

  toggleMenu = () => {
    let { sidebarToggle } = this.state;
    console.log(sidebarToggle);
    this.setState({
      sidebarToggle: !sidebarToggle
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar onMenu={this.toggleMenu} />
        <Sidebar toggle={this.state.sidebarToggle} onMenu={this.toggleMenu} />
        <Content />
      </div>
    );
  }
}

export default App;
