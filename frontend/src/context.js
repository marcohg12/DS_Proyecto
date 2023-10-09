import React, { createContext, useEffect, useState } from "react";
import Axios from "axios";
import { BACKEND_ROUTE } from "./scripts/constants";

export const appContext = createContext({});

export default function Context({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Axios.get(BACKEND_ROUTE + "/get_user", { withCredentials: true }).then(
      (res) => {
        setUser(res.data);
      }
    );
  }, []);

  return <appContext.Provider value={user}>{children}</appContext.Provider>;
}
