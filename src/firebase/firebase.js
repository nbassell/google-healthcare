import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAsoC160d7DpXYI7Dj1WrYaDJpC4uP_2xU",
  authDomain: "epam-hack19-nyc-3978.firebaseapp.com",
  databaseURL: "https://epam-hack19-nyc-3978.firebaseio.com",
  projectId: "epam-hack19-nyc-3978",
  storageBucket: "epam-hack19-nyc-3978.appspot.com",
  messagingSenderId: "638204508103"
};

firebase.initializeApp(config);

export const db = firebase.firestore();