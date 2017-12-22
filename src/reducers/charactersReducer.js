import {
  FETCH_CHARACTERS,
  RECEIVE_CHARACTERS,
  RECEIVE_CHARACTERS_BY_LETTER,
  RECEIVE_CHARACTER,
  ADD_FAVORITE,
  RESET_FILTERS
} from '../actions/types';

const INITIAL_STATE = {
  filter: [],
  all: [],
  character: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_CHARACTERS:
      return Object.assign({}, state, {
        all: action.payload,
        isFetching: false
      });
    case RECEIVE_CHARACTERS_BY_LETTER:
      return Object.assign({}, state, {
        filter: action.payload,
        isFetching: false
      });
    case RECEIVE_CHARACTER:
      return Object.assign({}, state, {
        character: action.payload,
        isFetching: false
      });
    case RESET_FILTERS:
      return Object.assign({}, state, {
        filter: [],
        isFetching: false
      });
    default:
      return state;
  }
}
