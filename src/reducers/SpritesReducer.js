// const InitialState = {
//   isLoading: true,
//   spritesImg: {} ,
// };

// const SpritesReducer = (state = InitialState, action) => {
//   switch (action.type) {
//     case "POKEMON_SPRITE_LOADING":
//       return {
//         ...state,
//         isLoading: true
//       };

//     case "POKEMON_SPRITE_SUCCESS":
//       return {
//         ...state,
//         isLoading: false,
//         spritesImg: {
//           ...state.spritesImg,
//           [action.pokemonName]: action.payload,
//         },
//       };
//     case "POKEMON_SPRITE_FAIL":
//       return {
//         ...state,
//         isLoading: false,
//       };
//     default: return state;
//   }
// };

// export default SpritesReducer;
