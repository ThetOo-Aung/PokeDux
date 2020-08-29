import Axios from "axios";

export const getPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });
    const perPage = 20;
    const offset = page * perPage - perPage;
    const res = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    );
   

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
     
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "POKEMON_LIST_FAIL",
      error: `${error}`
    });
  }
};


export const GetPokemon = (pokemon) => async dispatch => {
  try {
    dispatch({
      type: "POKEMON_LOADING",
    })
    const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    // console.log("GetPokemon");
    // console.log(res.data)
    const spritesImg = res.data.sprites.front_default;
    // console.log(res.data.types);
    dispatch({
      type:"POKEMON_SUCCESS",
      payload:{
        abilities: res.data.abilities,
        stats: res.data.stats,
        sprites: res.data.sprites,
        types: res.data.types,
      },
      pokemonName: pokemon,
      Sprites: spritesImg
      
    })
  }catch(error){
    dispatch({
      type:"POKEMON_FAIL",
      error: `${error}`
    })
  }
}
