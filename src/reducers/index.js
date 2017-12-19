import { combineReducers } from 'redux';
import comicsReducer from './comicsReducer';
import comicReducer from './comicReducer';

export default combineReducers({
  comics: comicsReducer,
  comic: comicReducer
});
