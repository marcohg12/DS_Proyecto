import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import ClientMenu from "./ClientMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/client_menu" element={<ClientMenu />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
