import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ClientMenu from "../pages/ClientMenu";
import { appContext } from "../context";
import Protected from "./Protected";
import AdminMenu from "../pages/AdminMenu";
import ProductViewer from "../pages/ProductViewer";
import ProductEdit from "../pages/ProductEdit";
import ProductView from "../pages/ProductView";
import PublicationViewer from "../pages/PublicationViewer";
import CategoryViewer from "../pages/CategoryViewer";
import CategoryEdit from "../pages/CategoryEdit";
import PublicationEdit from "../pages/PublicationEdit";
import PublicationView from "../pages/PublicationView";
import Profile from "../pages/Profile";

function App() {
  const ctx = useContext(appContext).user;

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
          path="/create_product"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={2}>
              <ProductEdit toCreate={true} backRoute="/admin_menu" />
            </Protected>
          }
        />
        <Route
          path="/edit_product/:id"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={2}>
              <ProductEdit toCreate={false} backRoute="/admin_products" />
            </Protected>
          }
        />
        <Route
          path="/view_product/:id"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={1}>
              <ProductView />
            </Protected>
          }
        />
        <Route
          path="/admin_products"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={2}>
              <ProductViewer forUser={"admin"} />
            </Protected>
          }
        />
        <Route
          path="/client_products"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={1}>
              <ProductViewer forUser={"client"} />
            </Protected>
          }
        />
        <Route
          path="/admin_publications"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={2}>
              <PublicationViewer forUser={"admin"} />
            </Protected>
          }
        />
        <Route
          path="/create_publication"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={2}>
              <PublicationEdit toCreate={true} backRoute="/admin_menu" />
            </Protected>
          }
        />
        <Route
          path="/edit_publication/:id"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={2}>
              <PublicationEdit
                toCreate={false}
                backRoute="/admin_publications"
              />
            </Protected>
          }
        />
        <Route
          path="/view_publication/:id"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={1}>
              <PublicationView />
            </Protected>
          }
        />
        <Route
          path="/client_publications"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={1}>
              <PublicationViewer forUser={"client"} />
            </Protected>
          }
        />
        <Route
          path="/admin_categories"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={2}>
              <CategoryViewer />
            </Protected>
          }
        />
        <Route
          path="/edit_category/:id"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={2}>
              <CategoryEdit />
            </Protected>
          }
        />
        <Route
          path="/admin_menu"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={2}>
              <AdminMenu />
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected ctx={ctx} loggedIn={true} forRole={null}>
              <Profile user={ctx} />
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
        <Route
          exact
          path="/"
          element={
            <Protected ctx={ctx} loggedIn={false} forRole={null}>
              <Login />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
