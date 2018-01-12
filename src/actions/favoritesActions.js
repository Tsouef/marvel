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
        if (snapshot.val() === null) {
          dispatch({ type: FETCH_FAVORITES_SUCCESS, payload: [] });
        } else {
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
  const { currentUser } = firebase.auth();
  return dispatch => {
    let ref = firebase.database().ref(`/users/${currentUser.uid}/favorites`);

    ref
      .orderByChild('id')
      .equalTo(id)
      .once('value', snapshot => {
        let updates = {};
        snapshot.forEach(child => (updates[child.key] = null));
        ref.update(updates);
        dispatch({ type: DELETE_FAVORITE });
      });
  };
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
