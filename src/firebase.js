import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBdN3aOLJ7ayrfVAQbOMxBNutgtOrNz3xs',
  authDomain: 'facebook-messenger-clone-d7b4f.firebaseapp.com',
  databaseURL: 'https://facebook-messenger-clone-d7b4f.firebaseio.com',
  projectId: 'facebook-messenger-clone-d7b4f',
  storageBucket: 'facebook-messenger-clone-d7b4f.appspot.com',
  messagingSenderId: '246488727738',
  appId: '1:246488727738:web:b911bab77180c854874283',
  measurementId: 'G-BNK6TX0G1F',
});

const db = firebaseApp.firestore();

export default db;
