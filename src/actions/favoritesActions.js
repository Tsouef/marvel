import { ADD_FAVORITE, DELETE_FAVORITE } from './types';

export const addFavorites = favorite => {
  return {
    type: ADD_FAVORITE,
    payload: favorite
  };
};

export const deleteFavorite = id => {
  console.log(id);
  return {
    type: DELETE_FAVORITE,
    id
  };
};
