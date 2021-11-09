import firebase from 'firebase/compat/app';
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyAY4s5U9Raaye7EJEXuL0K_URseC7oQ9j4",
  authDomain: "david-shitvcssay-temp.firebaseapp.com",
  projectId: "david-shitvcssay-temp",
  storageBucket: "david-shitvcssay-temp.appspot.com",
  messagingSenderId: "449778499439",
  appId: "1:449778499439:web:73ad4ff180173e0160729a"
  }

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();

export const messagesRef = databaseRef.child("messages")
export const usersRef = databaseRef.child("users")
