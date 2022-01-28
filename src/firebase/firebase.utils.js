import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDrzX4tHn5gtoVqjWEtDWDHoUQkA3E2LA4",
  authDomain: "crwn-db-b8cd2.firebaseapp.com",
  projectId: "crwn-db-b8cd2",
  storageBucket: "crwn-db-b8cd2.appspot.com",
  messagingSenderId: "778488345268",
  appId: "1:778488345268:web:38e26e2d841bb5f6b9dde1",
  measurementId: "G-HVHQ45NNZY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
