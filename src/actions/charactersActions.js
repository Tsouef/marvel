import axios from 'axios';
import { HASH, PUBLIC_KEY, TIMESTAMP } from '../config';
import {
  FETCH_CHARACTERS,
  RECEIVE_CHARACTERS,
  RECEIVE_CHARACTER,
  RESET_FILTERS,
  RECEIVE_CHARACTERS_BY_LETTER
} from './types';

const API_URL = 'https://gateway.marvel.com:443/v1/public';
const params = `?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

export const fetchCharacters = () => async dispatch => {
  dispatch({
    type: FETCH_CHARACTERS
  });

  const res = await axios.get(`${API_URL}/characters${params}&limit=100`);

  dispatch({
    type: RECEIVE_CHARACTERS,
    payload: res.data.data.results
  });
};

export const fetchCharactersByLetter = letter => async dispatch => {
  dispatch({
    type: FETCH_CHARACTERS
  });
  const res = await axios.get(
    `${API_URL}/characters${params}&nameStartsWith=${letter}&limit=100`
  );

  dispatch({
    type: RECEIVE_CHARACTERS_BY_LETTER,
    payload: res.data.data.results
  });
};

export const fetchCharacterById = id => async dispatch => {
  dispatch({
    type: FETCH_CHARACTERS
  });

  const res = await axios.get(`${API_URL}/characters/${id}${params}`);

  dispatch({
    type: RECEIVE_CHARACTER,
    payload: res.data.data.results[0]
  });
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS
  };
};
