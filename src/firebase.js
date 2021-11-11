// Pentru Firebase JS SDK v7.20.0 or a newer version, 
// measurementId is an optional command

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "A********************************",
    authDomain: "amzro-e06ad.firebaseapp.com",
    projectId: "amzro-e06ad",
    storageBucket: "amzro-e06ad.appspot.com",
    messagingSenderId: "1029572035520",
    appId: "1:1029572035520:web:d176f0294793531b057e25",
    measurementId: "G-YWHYGK8DSW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
  
export { db, auth };