import * as firebase from 'firebase';

const config = {
  apiKey: "YOUR INFO",
  authDomain: "YOUR INFO",
  databaseURL: "YOUR INFO",
  projectId: "YOUR INFO",
  storageBucket: "YOUR INFO",
  messagingSenderId: "YOUR INFO"
}

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();

export const messagesRef = databaseRef.child("messages")
export const usersRef = databaseRef.child("users")
