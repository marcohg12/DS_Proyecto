import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_ROUTE } from "./scripts/constants";
axios.defaults.withCredentials = true;
export const appContext = createContext({});

export default function Context({ children }) {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("session")) {
      return JSON.parse(localStorage.getItem("session"));
    }
    return null;
  });

  useEffect(() => {
    axios.get(BACKEND_ROUTE + "/get_user").then((res) => {
      setUser(res.data);
      localStorage.setItem("session", JSON.stringify(res.data));
    });
  }, []);

  const updateUserSessionData = () => {
    axios
      .get(BACKEND_ROUTE + "/get_user", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        localStorage.removeItem("session");
        localStorage.setItem("session", JSON.stringify(res.data));
      });
  };

  return (
    <appContext.Provider value={{ user, updateUserSessionData }}>
      {children}
    </appContext.Provider>
  );
}
