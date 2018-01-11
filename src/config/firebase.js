import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDn4DNe1DUhC9G0vLQkg71ijXAlWXE95Cw',
  authDomain: 'marvelapi-44f53.firebaseapp.com',
  databaseURL: 'https://marvelapi-44f53.firebaseio.com',
  projectId: 'marvelapi-44f53',
  storageBucket: 'marvelapi-44f53.appspot.com',
  messagingSenderId: '682350645936'
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;

