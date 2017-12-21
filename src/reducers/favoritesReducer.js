import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from '../actions/types';

const INITIAL_STATE = {
  favorites: [],
  showNotification: false,
  notificationContent: ''
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return Object.assign({}, state, {
        favorites: state.favorites.concat({
          id: action.payload.id,
          thumbnail: action.payload.thumbnail,
          name: action.payload.name,
          description: action.payload.description
        })
      });
    case DELETE_FAVORITE:
      return Object.assign({}, state, {
        favorites: state.favorites.filter(({ id }) => id !== action.id)
      });
    case SHOW_NOTIFICATION:
      console.log(action);
      return Object.assign({}, state, {
        showNotification: true,
        notificationContent: action.text,
        notificationState: action.state
      });
    case HIDE_NOTIFICATION:
      return Object.assign({}, state, {
        showNotification: false
      });
    default:
      return state;
  }
}
