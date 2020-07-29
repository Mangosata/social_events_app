import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVSbz5n7LIrzInWLqokjoZk1_aKmYGhmk",
  authDomain: "revents-ac84e.firebaseapp.com",
  databaseURL: "https://revents-ac84e.firebaseio.com",
  projectId: "revents-ac84e",
  storageBucket: "revents-ac84e.appspot.com",
  messagingSenderId: "891070770800",
  appId: "1:891070770800:web:8c0528386bd2f79bc38eb5",
  measurementId: "G-7T3F2M9755",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
