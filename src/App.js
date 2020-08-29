import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import { Switch, Route } from "react-router-dom";
import PokeDetail from "./Components/PokeDetail";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pokemon/:pokemon" component={PokeDetail} />
        
      </Switch>
    </div>
  );
}

export default App;
