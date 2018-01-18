import { combineReducers } from 'redux';
import comicsReducer from './comicsReducer';
import charactersReducer from './charactersReducer';
import favoritesReducer from './favoritesReducer';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  comics: comicsReducer,
  characters: charactersReducer,
  favorites: favoritesReducer,
  auth: authReducer,
  form: formReducer
});
