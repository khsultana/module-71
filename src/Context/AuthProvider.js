import React, { createContext } from "react";
import app from "../Firebase/firebase.config";
import { getAuth } from "firebase/auth";

const AutContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const authInfo = {};

  return <AutContext.Provider value={authInfo}>{children}</AutContext.Provider>;
};

export default AuthProvider;
