import React, { useEffect } from "react";
import "./PokeList.css";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/PokemonListAction";
import { Link } from "react-router-dom";

const PokeList = ({ pokemon }) => {
  const dispatch = useDispatch();
  const Pokemon = useSelector((state) => state.Pokemon);
  const pokeSprite = Pokemon.sprites[pokemon.name];

  useEffect(() => {
    dispatch(GetPokemon(pokemon.name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="PokeList pokemon-item col-2">
      <div className="cards p-1 m-4 w-100 rounded">
        <div className="textEdit text-center text-light titleEditor">{pokemon.name}</div>

        <div className="sprite-div my-3 p-2  rounded">
          {pokeSprite ? (
            <img src={pokeSprite} alt={""} className="img" />
          ) : (
            <div className="img filler-img">Unknown Data</div>
          )}
        </div>

        <Link
          to={`/pokemon/${pokemon.name}`}
          onClick={() => dispatch(GetPokemon(pokemon.name))}
        >
          <button className="btn btn-sm btn-outline-danger text-center mt-2">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PokeList;
