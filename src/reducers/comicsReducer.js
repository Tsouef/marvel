import {
  FETCH_COMICS,
  RECEIVE_COMICS,
  RECEIVE_COMIC,
  RECEIVE_COMICS_BY_LETTER,
  ADD_FAVORITE
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
        isFetching: true
      });
    case RECEIVE_COMICS:
      return Object.assign({}, state, {
        all: action.payload,
        isFetching: false
      });
    case RECEIVE_COMICS_BY_LETTER:
      return Object.assign({}, state, {
        filter: action.payload,
        isFetching: false
      });
    case RECEIVE_COMIC:
      return Object.assign({}, state, {
        comic: action.payload,
        isFetching: false
      });
    default:
      return state;
  }
}
