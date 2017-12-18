import { FETCH_COMICS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_COMICS':
      return state;
    default:
      return state;
  }
}
