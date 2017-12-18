import { FETCH_COMICS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMICS:
      return action.payload || [];
    default:
      return state;
  }
}
