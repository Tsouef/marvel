import { combineReducers } from 'redux';
import comicsReducer from './comicsReducer';
import comicReducer from './comicReducer';
import charactersReducer from './charactersReducer';
import characterReducer from './characterReducer';

export default combineReducers({
  comics: comicsReducer,
  comic: comicReducer,
  characters: charactersReducer,
  character: characterReducer
});
