import {
  FETCH_COMICS,
  FETCH_COMIC,
  FILTER_COMICS_BY_LETTER
} from '../actions/types';

const INITIAL_STATE = {
  filter: [],
  all: [],
  comic: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_COMICS:
      return Object.assign({}, state, {
        all: action.payload
      });
    case FILTER_COMICS_BY_LETTER:
      return Object.assign({}, state, {
        filter: action.payload
      });
    case FETCH_COMIC:
      return Object.assign({}, state, {
        comic: action.payload
      });
    default:
      return state;
  }
}
