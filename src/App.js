import React from "react";
import CounterConnector from "./components/counter/counter-connector";
import LoginConnector from "./components/login/login-connector";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Redux Workshop</h1>
      <LoginConnector />
      <CounterConnector />
    </div>
  );
}

export default App;
