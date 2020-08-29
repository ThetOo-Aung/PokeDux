const initialState = {
  data: {
    
  },
  isLoading: true,
  errorMsg: "", 
  sprites: {

  }
};

const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMON_LOADING":
      return {
        ...state,
        isLoading: true,
        errorMsg: "",
      };
    case "POKEMON_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          [action.pokemonName]: {
            abilities: action.payload.abilities,
            stats: action.payload.stats,
            sprites: action.payload.sprites,
            types: action.payload.types,
          },
        },
        sprites: {
          ...state.sprites,
          [action.pokemonName]:action.Sprites
        }
      };
    case "POKEMON_FAIL":
      return {
        ...state,
        isLoading: false,
        errorMsg: action.error,
      };
    default:
      return state;
  }
};

export default PokemonReducer;