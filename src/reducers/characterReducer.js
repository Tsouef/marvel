import { FETCH_CHARACTER } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CHARACTER:
      return action.payload || [];
    default:
      return state;
  }
}
