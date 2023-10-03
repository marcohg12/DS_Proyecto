import React from "react";
import ClientWindow from "./ClientWindow";
import { Link } from "react-router-dom";
import photo_1 from "../photos/ClientMenu_img_1.png";
import photo_2 from "../photos/ClientMenu_img_2.jpg";

function ClientMenu() {
  return (
    <ClientWindow
      component={
        <section className="">
          <div className="mb-3">
            <h3>Bienvenid@, nombre al Sistema Duende</h3>
          </div>
          <div className="row mt-4">
            <div className="col d-flex flex-column">
              <Link className="text-dark mb-4">
                <b>Ver publicaciones</b>
              </Link>
              <img
                src={photo_1}
                alt=""
                style={{ width: "400px", height: "400px" }}
              />
              <p className="mt-3">Observa mis trabajos de maquillaje</p>
            </div>
            <div className="col d-flex flex-column justify-content-center">
              <Link className="text-dark mb-4">
                <b>Ver productos</b>
              </Link>
              <img
                src={photo_2}
                alt=""
                style={{ width: "400px", height: "400px" }}
              />
              <p className="mt-3">
                Adquiere productos de maquillaje o cuidado para la piel
              </p>
            </div>
          </div>
        </section>
      }
    ></ClientWindow>
  );
}

export default ClientMenu;
