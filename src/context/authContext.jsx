import { createContext } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const value = {};
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
