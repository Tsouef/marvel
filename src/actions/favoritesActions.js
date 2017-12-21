import { ADD_FAVORITE } from './types';

export const addFavorites = favorite => {
  return {
    type: ADD_FAVORITE,
    payload: favorite
  };
};
