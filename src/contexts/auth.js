import React, { useState, createContext } from "react";
import { apiSysFar } from "../services/apiSysFar";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("sysfar"));

  return (
    <AuthContext.Provider value={{ jwt: user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );

  async function Login(email, password) {
    try {
      const { data } = await apiSysFar.post("/auth/login", { email, password });

      setUser(data.access_token);
      localStorage.setItem("sysfar", data.access_token);
      return true;
    } catch (error) {
      return false;
    }
  }

  async function Logout() {
    setUser(null);
    localStorage.removeItem("listfav-signed");
  }
};

export default AuthContext;
