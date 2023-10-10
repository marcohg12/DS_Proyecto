import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import AdminWindow from "../components/AdminWindow";

function ProductEdit({ toCreate, backRoute }) {
  return (
    <AdminWindow>
      <div className="row mt-4 mb-4">
        <div className="mt-4 col-md-6 d-flex flex-column">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"
            className="img-fluid rounded "
            alt=""
          />
        </div>
        <div className="mt-4 col-md-6 d-flex flex-column">
          <h3 className="mb-4">
            {toCreate ? "Crear Producto" : "Editar Producto"}
          </h3>
          <form>
            <div className="row mb-4">
              <div className="col mb-4">
                <div>
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <div className="col mb-4">
                <div>
                  <label className="form-label">Precio</label>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    defaultValue="0"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="mb-4">
                <label className="form-label">Descripción</label>
                <textarea className="form-control" required />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col mb-4">
                <div>
                  <label className="form-label">Unidades</label>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    defaultValue="0"
                    required
                  />
                </div>
              </div>
              <div className="col mb-4">
                {toCreate ? (
                  <div>
                    <label className="form-label">Foto</label>
                    <input type="file" className="form-control" required />
                  </div>
                ) : (
                  <div>
                    <label className="form-label">Foto</label>
                    <input type="file" className="form-control" />
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex flex-row-reverse">
              <Link
                to={backRoute}
                className="btn btn-block fa-lg mb-3"
                style={{ backgroundColor: "#73E2A7", width: "150px" }}
              >
                Regresar
              </Link>
              <Button
                text={toCreate ? "Crear" : "Guardar"}
                bootstrap="btn btn-block fa-lg mb-3 me-4"
                width={150}
                color="#73E2A7"
                type="submit"
              />
              {toCreate ? (
                <></>
              ) : (
                <Button
                  text={"Eliminar"}
                  bootstrap="btn btn-danger fa-lg mb-3 me-4"
                  width={150}
                  type="button"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </AdminWindow>
  );
}

export default ProductEdit;
