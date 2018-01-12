import firebase, { auth } from '../config/firebase';
import history from '../history';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  FETCH_USER
} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    console.log('Action LOGIN_USER');
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('success');
        loginUserSuccess(dispatch, user);
      })
      .catch(error => {
        console.log(error);
        console.log('peut être ? ');
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            console.log('success 2');
            loginUserSuccess(dispatch, user);
          })
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  console.log('Action LOGIN USER SUCCESS');
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  history.push('/');
};

export const fetchUser = dispatch => {
  console.log('Action FETCH_USER');
  return dispatch => {
    dispatch({ type: FETCH_USER });
    auth.onAuthStateChanged(user => {
      if (user) {
        loginUserSuccess(dispatch, user);
      }
    });
  };
};

export const logoutUser = dispatch => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER });
    auth.signOut().then(logoutUserSuccess(dispatch));
  };
};

const logoutUserSuccess = dispatch => {
  dispatch({ type: LOGOUT_USER_SUCCESS });
};
