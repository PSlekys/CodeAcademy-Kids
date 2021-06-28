import firebase from "firebase/app";
import "firebase/firestore";

export const getProducts = async () => {
  try {
    return await firebase.firestore().collection("products").get();
  } catch (e) {
    return e;
  }
};

export const getGroups = async (id) => {
  try {
    return await firebase
      .firestore()
      .collection("products")
      .doc(id)
      .collection("groups")
      .get();
  } catch (e) {
    return e;
  }
};
