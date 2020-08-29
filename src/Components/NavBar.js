import React, { useState } from "react";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { GetPokemon } from "../actions/PokemonListAction";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="NavBar mb-3">
      <nav className="navbar navbar-light bg-danger justify-content-between">
        <div className="navbar-brand text-warning">PokeDux</div>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Link to={`/pokemon/${search}`} className="btn btn-outline-dark my-2 my-sm-0" onClick={()=>dispatch(GetPokemon(search))}>
            Search
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
