import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  HIDE_NOTIFICATION,
  SHOW_NOTIFICATION
} from './types';

export const addFavorites = favorite => {
  return {
    type: ADD_FAVORITE,
    payload: favorite
  };
};

export const deleteFavorite = id => {
  return { type: DELETE_FAVORITE, id };
};

export const showNotification = (id, text) => {
  return { type: SHOW_NOTIFICATION, id, text };
};

export const hideNotification = id => {
  return { type: HIDE_NOTIFICATION, id };
};

let nextNotificationId = 0;
export const showNotificationWithTimeout = text => dispatch => {
  const id = nextNotificationId++;
  dispatch(showNotification(id, text));

  setTimeout(() => {
    dispatch(hideNotification(id));
  }, 3000);
};
