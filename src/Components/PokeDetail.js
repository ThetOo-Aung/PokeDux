import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPokemon } from "../actions/PokemonListAction";
import "./PokeDetail.css";
import Stats from "./PokeDetails/Stats";
import Abilities from "./PokeDetails/Abilities";

const PokeDetail = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.Pokemon);
  const pokeData = pokemon.data[pokemonName];
  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, [pokemonName, dispatch]);

  return (
    <div className="poke">
      <h1 className="pokemon-name" >{pokemonName}</h1>


      {pokeData ? (
        <div className="pokemon-wrapper">
          <div className="item">
            <h3>Sprites </h3>
            <hr></hr>

            {!pokeData.sprites.front_default &&
              !pokeData.sprites.back_default &&
              !pokeData.sprites.front_shiny &&
              !pokeData.sprites.back_shiny && <h4>No Data</h4>
              }

            {pokeData.sprites.front_default && (
              <img src={pokeData.sprites.front_default} alt="" />
            )}
            {pokeData.sprites.back_default && (
              <img src={pokeData.sprites.back_default} alt={""} />
            )}
            {pokeData.sprites.front_shiny && (
              <img src={pokeData.sprites.front_shiny} alt={""} />
            )}
            {pokeData.sprites.back_shiny && (
              <img src={pokeData.sprites.back_shiny} alt={""} />
            )}
          </div>
          <div className="item ">
            <Stats pokeData={pokeData}></Stats>
          </div>
          <div className="item">
            <Abilities pokeData={pokeData}></Abilities>
          </div>
        </div>
      ) : (
        <div> No Data </div>
      )}
    </div>
  );
};

export default PokeDetail;
