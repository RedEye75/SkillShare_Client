import React, { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth();

const AuthProvider = ({ children }) => {
  const user = { name: "Yusuf Bin Imam" };
  const ProviderLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const authInfo = { user, ProviderLogin };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
