const initialState = {
  data: {},
  stats: {},
  types: [],
  isLoading: true,
  errorMsg: "",
  id: '',
  sprites: {},
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
          },
        },
        stats: action.stats,
        types: action.types,
        id: action.id,
      
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
