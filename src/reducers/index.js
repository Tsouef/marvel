import { combineReducers } from 'redux';
import comicsReducer from './comicsReducer';
import comicReducer from './comicReducer';
import charactersReducer from './charactersReducer';
import characterReducer from './characterReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
  comics: comicsReducer,
  comic: comicReducer,
  characters: charactersReducer,
  favorites: favoritesReducer
});
