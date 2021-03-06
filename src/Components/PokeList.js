import React, { useEffect, useState } from "react";
import "./PokeList.css";
import { useDispatch } from "react-redux";
import { GetPokemon } from "../actions/PokemonListAction";
import { Link } from "react-router-dom";

const PokeList = ({ pokemon }) => {
  // const [imageLoading, setImageLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  const dispatch = useDispatch();
  const url = pokemon.url;
  const pokemonIndex = url.split("/")[url.split("/").length - 2];

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

  useEffect(() => {
    dispatch(GetPokemon(pokemon.name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="PokeList pokemon-item col-2">
      <div className="cards p-1 m-4 w-100 rounded">
        <div className="textEdit text-center text-light titleEditor">
          {pokemon.name}
        </div>

        <div className="sprite-div my-3 p-2  rounded">
          {imgError ? (
            <div className="img filler-img">Unknown Data</div>
          ) : (
            <img
              src={imageUrl}
              alt={""}
              className="img"
              // onLoad={() => setImageLoading(true)}
              onError={() => setImgError(true)}
            />
          )}

          {/* <div className="img filler-img">Unknown Data</div> */}
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
