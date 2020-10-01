import firebase from "firebase/app";
import firestore from "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("sB0Njjakmo6olyAnmiFd")
  .collection("cartItems")
  .doc("HN4y9j3n4RM1jsqBfsYv");

firestore.doc("/users/sB0Njjakmo6olyAnmiFd/cartItems/HN4y9j3n4RM1jsqBfsYv");

firestore.collection("/users/sB0Njjakmo6olyAnmiFd/cartItems");
