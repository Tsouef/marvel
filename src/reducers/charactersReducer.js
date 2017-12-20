import {
  FETCH_CHARACTERS,
  FETCH_CHARACTER,
  FILTER_CHARACTERS_BY_LETTER
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
        all: action.payload
      });
    case FILTER_CHARACTERS_BY_LETTER:
      return Object.assign({}, state, {
        filter: action.payload
      });
    case FETCH_CHARACTER:
      return Object.assign({}, state, {
        character: action.payload
      });
    default:
      return state;
  }
}
