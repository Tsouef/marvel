import {
  ADD_FAVORITE,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  FETCH_FAVORITES_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  favorites: [],
  showNotification: false,
  notificationContent: ''
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FAVORITES_SUCCESS:
      return Object.assign({}, state, {
        favorites: action.payload
      });
    case SHOW_NOTIFICATION:
      return Object.assign({}, state, {
        showNotification: true,
        notificationContent: action.text,
        notificationState: action.state
      });
    case HIDE_NOTIFICATION:
      return Object.assign({}, state, {
        showNotification: false
      });
    case ADD_FAVORITE:
    default:
      return state;
  }
}
