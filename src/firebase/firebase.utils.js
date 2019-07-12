import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBcQYXNqZsuwmzzhAv8Hg4IyAoUiKZdG9c",
  authDomain: "react-clothing-store.firebaseapp.com",
  databaseURL: "https://react-clothing-store.firebaseio.com",
  projectId: "react-clothing-store",
  storageBucket: "",
  messagingSenderId: "564804650970",
  appId: "1:564804650970:web:7754958c9b5de825"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
