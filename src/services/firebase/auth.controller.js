import firebase from "firebase/app";
import "firebase/auth";

export const signIn = async (email, password) => {
  try {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    return e;
  }
};

export const createUser = async (email, password) => {
  try {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  } catch (e) {
    return e;
  }
};

export const signOut = () => {
  firebase.auth().signOut();
};
