import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAYhjoWO5pPwoG0QQCCsODZHgpHo6zEhwM",
  authDomain: "crwn-db-75790.firebaseapp.com",
  databaseURL: "https://crwn-db-75790.firebaseio.com",
  projectId: "crwn-db-75790",
  storageBucket: "crwn-db-75790.appspot.com",
  messagingSenderId: "457608346416",
  appId: "1:457608346416:web:cfbf921a9f781ff9bce6f5",
  measurementId: "G-Y4Z93DFVB1",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
