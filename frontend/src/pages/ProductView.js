import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ClientWindow from "../components/ClientWindow";

function ProductView() {
  return (
    <ClientWindow>
      <div className="row mt-4 mb-4">
        <div className="mt-4 col-md-6 d-flex flex-column">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"
            className="img-fluid rounded "
            alt=""
          />
        </div>
        <div className="mt-4 col-md-6 d-flex flex-column">
          <div className="row mb-4">
            <h4>Nombre</h4>
            <p>Nombre del producto</p>
          </div>
          <div className="row mb-4">
            <h4>Descripción</h4>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum
              lorem, accumsan sed neque et, aliquet accumsan leo. Nunc
              condimentum scelerisque tempus. Aliquam ultrices, neque eu pretium
              aliquam, diam lacus efficitur nibh, faucibus blandit urna dui at
              felis. Cras vulputate mi nec nunc tincidunt placerat.
            </p>
          </div>
          <div className="row mb-4">
            <h4>Precio</h4>
            <p>₡500</p>
          </div>
          <div className="row mb-4 md-4">
            <form className="d-flex">
              <div className="col mb-4 me-3">
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  max="5"
                  defaultValue="1"
                  required
                />
              </div>
              <div className="col mb-4 md-4">
                <Button
                  text="Agregar al carrito"
                  bootstrap="btn"
                  color="#73E2A7"
                  type="submit"
                />
              </div>
              <div className="col mb-4 md-4 d-flex flex-row-reverse">
                <Link
                  to="/client_products"
                  className="btn btn-block"
                  style={{ backgroundColor: "#73E2A7", width: "150px" }}
                >
                  Regresar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ClientWindow>
  );
}

export default ProductView;
