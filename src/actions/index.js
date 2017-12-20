import axios from 'axios';

import { FETCH_COMICS, FETCH_COMIC, FETCH_CHARACTERS, FETCH_CHARACTER, ADD_FAVORITE } from './types';
import { HASH, PUBLIC_KEY, TIMESTAMP } from '../config';

const API_URL = 'https://gateway.marvel.com:443/v1/public';
const params = `?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

export const fetchComics = () => async dispatch => {
  const res = await axios.get(`${API_URL}/comics${params}&limit=100`);

  dispatch({
    type: FETCH_COMICS,
    payload: res.data.data.results
  });
};

export const fetchComicById = id => async dispatch => {
  const res = await axios.get(`${API_URL}/comics/${id}${params}&limit=100`);

  dispatch({
    type: FETCH_COMIC,
    payload: res.data.data.results[0]
  });
};

export const fetchCharacters = () => async dispatch => {
  const res = await axios.get(`${API_URL}/characters${params}&limit=100`);

  dispatch({
    type: FETCH_CHARACTERS,
    payload: res.data.data.results
  });
};

export const fetchCharactersByLetter = letter => async dispatch => {
  const res = await axios.get(`${API_URL}/characters${params}&nameStartsWith=${letter}&limit=100`);

  dispatch({
    type: FETCH_CHARACTERS,
    payload: res.data.data.results
  });
};

export const fetchCharacterById = id => async dispatch => {
  const res = await axios.get(`${API_URL}/characters/${id}${params}`);

  dispatch({
    type: FETCH_CHARACTER,
    payload: res.data.data.results[0]
  });
};

export const addFavorites = favorite => {
  return {
    type: ADD_FAVORITE,
    payload: favorite
  };
};
