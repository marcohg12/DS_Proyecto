import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ClientMenu from "../pages/ClientMenu";
import { appContext } from "../context";
import Protected from "./Protected";

function App() {
  const ctx = useContext(appContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/client_menu"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={1}>
              <ClientMenu />
            </Protected>
          }
        />
        <Route
          path="/"
          element={
            <Protected ctx={ctx} loggedIn={false} forRole={null}>
              <Login />
            </Protected>
          }
        />
        <Route
          path="/signup"
          element={
            <Protected ctx={ctx} loggedIn={false} forRole={null}>
              <Signup />
            </Protected>
          }
        />
        <Route
          path="/login"
          element={
            <Protected ctx={ctx} loggedIn={false} forRole={null}></Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
