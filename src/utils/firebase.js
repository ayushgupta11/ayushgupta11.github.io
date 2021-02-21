import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyALvppaFT4tRUm2i8phIQvNRW7KRLRoOaM",
    authDomain: "portfolio-service-bd3a2.firebaseapp.com",
    projectId: "portfolio-service-bd3a2",
    storageBucket: "portfolio-service-bd3a2.appspot.com",
    messagingSenderId: "1048627916171",
    appId: "1:1048627916171:web:4c0747e91ba3b90cd9d38e",
    measurementId: "G-R6MGMMDQ62"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();