import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function ClientNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#1C7C54" }}
    >
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-3 mb-lg-3">
            <li className="nav-item me-4 mt-3">
              <Link className="nav-link text-white">Menú principal</Link>
            </li>
            <li className="nav-item me-4 mt-3">
              <Link className="nav-link text-white">Productos</Link>
            </li>
            <li className="nav-item me-4 mt-3">
              <Link className="nav-link text-white">Publicaciones</Link>
            </li>
            <li className="nav-item me-4 mt-3">
              <Link className="nav-link text-white">Mi carrito</Link>
            </li>
            <li className="nav-item me-4 mt-3">
              <Link className="nav-link text-white">Mis pedidos</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <Button
            text="Mi perfil"
            bootstrap="btn mx-2"
            color="#73E2A7"
            width="150px"
          ></Button>
          <form method="POST" action="/logout" className="ms-4">
            <Button
              text="Cerrar sesión"
              bootstrap="btn mx-2"
              color="#73E2A7"
              width="150px"
            ></Button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default ClientNavbar;
