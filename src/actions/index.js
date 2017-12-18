import axios from 'axios';
import moment from 'moment';

import { FETCH_COMICS } from './types';
import { HASH, PUBLIC_KEY, TIMESTAMP } from '../config';

const API_URL = 'https://gateway.marvel.com:443/v1/public';
const params = `?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

export const fetchComics = () => async dispatch => {
  const res = await axios.get(`${API_URL}/comics${params}`);

  dispatch({
    type: FETCH_COMICS,
    payload: res.data.data.results
  });
};
