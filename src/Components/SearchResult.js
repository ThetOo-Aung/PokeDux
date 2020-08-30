import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPokemon } from "../actions/PokemonListAction";
import { Link } from "react-router-dom";

const SearchResult = (props) => {
  const name = props.match.params.pokemon;
  const dispatch = useDispatch();
  const [imgError, setImgError] = useState(false);

  const Pokemon = useSelector((state) => state.Pokemon);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Pokemon.id}.png`;



  useEffect(() => {
    dispatch(GetPokemon(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="PokeList pokemon-item col-2">
       <div className="cards p-1 m-4 w-100 rounded">
        <div className="textEdit text-center text-light titleEditor">
          {name}
        </div>

        <div className="sprite-div my-3 p-2  rounded">
          { imgError ? (
            <div className="img filler-img">Unknown Data</div>
          ) : (
            <img
              src={imageUrl}
              alt={""}
              className="img"
             
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <Link
          to={`/pokemon/${name}`}
          onClick={() => dispatch(GetPokemon(name))}
        >
          <button className="btn btn-sm btn-outline-danger text-center mt-2">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchResult;
