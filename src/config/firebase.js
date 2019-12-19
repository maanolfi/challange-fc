import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const myFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCL_rq_BJXnBbCZ5yX94HkYhdmsrf2ipMQ',
  authDomain: 'fcamara-4d665.firebaseapp.com',
  databaseURL: 'https://fcamara-4d665.firebaseio.com',
  projectId: 'fcamara-4d665',
  storageBucket: 'fcamara-4d665.appspot.com',
  messagingSenderId: '264476371063',
  appId: '1:264476371063:web:1fa6e8855ce6af5c583e72',
});

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp);

export default reduxSagaFirebase;
