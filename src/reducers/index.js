import { combineReducers } from 'redux';
import comicsReducer from './comicsReducer';
import charactersReducer from './charactersReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
  comics: comicsReducer,
  characters: charactersReducer,
  favorites: favoritesReducer
});
