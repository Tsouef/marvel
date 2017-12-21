export * from './charactersActions';
export * from './comicsActions';

export const addFavorites = favorite => {
  return {
    type: 'ADD_FAVORITE',
    payload: favorite
  };
};
