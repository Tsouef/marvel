import axios from 'axios';
import { HASH, PUBLIC_KEY, TIMESTAMP } from '../config';
import { FETCH_COMICS, FETCH_COMIC, FILTER_COMICS_BY_LETTER } from './types';

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

export const fetchComicsByLetter = letter => async dispatch => {
  const res = await axios.get(
    `${API_URL}/comics${params}&titleStartsWith=${letter}&limit=100`
  );

  dispatch({
    type: FILTER_COMICS_BY_LETTER,
    payload: res.data.data.results
  });
};
