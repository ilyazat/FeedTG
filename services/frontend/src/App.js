import React, { Component } from "react";
import "./App.css";
import posts from "./data/posts";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Cards />
    </div>
  );
}

export default App;
