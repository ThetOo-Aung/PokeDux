import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
// import PokeDetail from "./Components/PokeDetail";
import NavBar from "./Components/NavBar";
import SearchResult from "./Components/SearchResult";
import SearchResultError from "./Components/SearchResultError";
import PokemonDetail from "./Components/PokeDetails/PokemonDetail";

function App() {
  
  return (
    <div className="App">
  <Router>
    <NavBar></NavBar>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pokemon/:pokemon" component={PokemonDetail} />
        <Route exact path="/search/pokemon" component={SearchResultError }/>
        <Route exact path="/search/pokemon/:pokemon" component={SearchResult} />
        <Redirect to="/" />
      </Switch></Router> 
    </div>
  );
}

export default App;
