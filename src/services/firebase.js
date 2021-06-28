import firebase from "firebase";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBKZleJ3xQ66dew1jBjH0o5wAoxpeSGwfc",
  authDomain: "ca-kids.firebaseapp.com",
  projectId: "ca-kids",
  storageBucket: "ca-kids.appspot.com",
  messagingSenderId: "578909557125",
  appId: "1:578909557125:web:be2a3cd23ab325b87934ec",
  measurementId: "G-FLMRMCD5H1",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
