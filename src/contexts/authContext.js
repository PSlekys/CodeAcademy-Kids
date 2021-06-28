import React, { useState, createContext, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      }
    });
  });

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
