import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/content/Content";
import "./design-system.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
