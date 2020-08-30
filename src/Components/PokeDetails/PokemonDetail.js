import React, { useEffect, useState } from "react";
import "./PokemonDetail.css";
import { useDispatch, useSelector } from "react-redux";
import Types from "./Types";

import { GetPokemon } from "../../actions/PokemonListAction";
import { TYPE_COLORS } from "../../utils";
import Abilities from "./Abilities";

const PokemonDetail = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.Pokemon);
  const [imgError, setImgError] = useState(false);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  

  const types = pokemon.types;

  const themeColor =
    types.length > 1
      ? `${TYPE_COLORS[types[types.length - 2]]}`
      : `${TYPE_COLORS[types[types.length - 1]]}`;

  const {
    hp,
    attack,
    defense,
    speed,
    specialAttack,
    specialDefense,
  } = pokemon.stats;

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="PokemonDetail col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5>Pokemon ID - {pokemon.id}</h5>
              </div>
              <div className="col-7">
                <div className="float-right">
                  <Types pokemon={pokemon}></Types>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className=" col-md-3">
              {imgError ? <div className="img filler-img">Unknown data</div> :
                <img
                  alt={""}
                  src={imageUrl}
                  className=" card-img-top rounded mx-auto mt-2 p-3"
                  onError={() => setImgError(true)}
                />}
              </div>
              {/* Start of Progress Bar */}
              <div className="col-md-9">
                <h4 className="mx-auto pokemon-name">{pokemonName}</h4>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-3`}>HP</div>

                  <div className={`col-12 col-md-9`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${hp}%`,
                          backgroundColor: `#${themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{hp}%</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className={`col-12 col-md-3`}>Attack</div>
                  <div className={`col-12 col-md-9`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${attack}%`,
                          backgroundColor: `#${themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{attack}%</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className={`col-12 col-md-3`}>Defense</div>
                  <div className={`col-12 col-md-9`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${defense}%`,
                          backgroundColor: `#${themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{defense}%</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-3`}>Speed</div>
                  <div className={`col-12 col-md-9`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${speed}%`,
                          backgroundColor: `#${themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{speed}%</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-3`}>Sepcial Attack</div>
                  <div className={`col-12 col-md-9`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${specialAttack}%`,
                          backgroundColor: `#${themeColor}`,
                        }}
                        aria-valuenow={specialAttack}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{specialAttack}%</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-3`}>Special Defense</div>
                  <div className={`col-12 col-md-9`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${specialDefense}%`,
                          backgroundColor: `#${themeColor}`,
                        }}
                        aria-valuenow={specialDefense}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{specialDefense}%</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End ....  */} 
            <hr />

          <div className="d-flex justify-content-cneter align-items-center">
          <h3 className="text-warning mr-3"> Abilities : </h3>
                 <Abilities pokeData={pokemon.data[pokemonName]}></Abilities>   </div> 
          </div>
         


        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
