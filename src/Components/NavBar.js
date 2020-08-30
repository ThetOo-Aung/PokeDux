import React, { useState } from "react";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { GetPokemon } from "../actions/PokemonListAction";
import {  NavLink } from "react-router-dom";


const NavBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  

  return (
    <div className="NavBar mb-3">
      <nav className="navbar navbar-light bg-danger justify-content-between">
        <a href="/" className="navbar-brand ml-4">PokeDux</a>
        <form className="form-inline" >
          <input required
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => setSearch(event.target.value)}
            
          />
          <NavLink to={`/search/pokemon/${search}`} className="btn btn-outline-dark my-2 my-sm-0" type="submit" onClick={()=> dispatch(GetPokemon(search))}>Search</NavLink>
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
