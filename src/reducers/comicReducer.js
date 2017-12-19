import { FETCH_COMIC } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMIC:
      return action.payload || [];
    default:
      return state;
  }
}
