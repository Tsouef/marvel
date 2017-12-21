import { ADD_FAVORITE, DELETE_FAVORITE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [
        ...state,
        {
          id: action.payload.id,
          thumbnail: action.payload.thumbnail,
          name: action.payload.name,
          description: action.payload.description
        }
      ];
    case DELETE_FAVORITE:
      // console.log(state.favorites.item[0].id);
      // console.log(action.payload.id);
      const filteredFavorites = state.filter(item => item.id !== action.id);
      console.log(filteredFavorites);
      return filteredFavorites;
    default:
      return state;
  }
}
