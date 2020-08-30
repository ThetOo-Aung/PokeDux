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
      error: `${error}`,
    });
  }
};

export const GetPokemon = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LOADING",
    });
    const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const spritesImg = res.data.sprites.front_default;

    let { hp, attack, defense, speed, specialAttack, specialDefense } = "";
    
    res.data.stats.map((stat) => {
      switch (stat.stat.name) {
        case "hp":
          hp = stat["base_stat"];
          break;
        case "attack":
          attack = stat["base_stat"];
          break;
        case "defense":
          defense = stat["base_stat"];
          break;
        case "speed":
          speed = stat["base_stat"];
          break;
        case "special-attack":
          specialAttack = stat["base_stat"];
          break;
        case "special-defense":
          specialDefense = stat["base_stat"];
          break;
        default:
          break;
      }return '';
    });
    const types = res.data.types.map((type) => type.type.name);

    dispatch({
      type: "POKEMON_SUCCESS",
      stats: { hp, attack, defense, speed, specialAttack, specialDefense },
      types: types,
      id: res.data.id,
      payload: {
        abilities: res.data.abilities,
      },
      pokemonName: pokemon,
      
    });
  } catch (error) {
    dispatch({
      type: "POKEMON_FAIL",
      error: `${error}`,
    });
  }
};
