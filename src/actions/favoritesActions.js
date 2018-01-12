import firebase, { auth } from '../config/firebase';

import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  HIDE_NOTIFICATION,
  SHOW_NOTIFICATION,
  FETCH_FAVORITES_SUCCESS
} from './types';

export const fetchFavorites = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/favorites`)
      .on('value', snapshot => {
        console.log(snapshot.val());
        if (snapshot.val() !== null) {
          let arr = Object.values(snapshot.val());
          dispatch({ type: FETCH_FAVORITES_SUCCESS, payload: arr });
        }
      });
  };
};

export const addFavorites = favorite => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/favorites`)
      .push(favorite)
      .then(() => {
        dispatch({ type: ADD_FAVORITE });
      });
  };
};

export const deleteFavorite = id => {
  return { type: DELETE_FAVORITE, id };
};

export const showNotification = (id, text, state) => {
  return { type: SHOW_NOTIFICATION, id, text, state };
};

export const hideNotification = id => {
  return { type: HIDE_NOTIFICATION, id };
};

let nextNotificationId = 0;
export const showNotificationWithTimeout = (text, state) => dispatch => {
  const id = nextNotificationId++;
  dispatch(showNotification(id, text, state));

  setTimeout(() => {
    dispatch(hideNotification(id));
  }, 5000);
};
