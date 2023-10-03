import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Signup() {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <form>
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h1 className="mt-1 mb-5 pb-1">Sistema Duende</h1>
                    </div>
                    <h5 className="mt-1 mb-3 pb-1">Registro</h5>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="signup_name"
                        className="form-control"
                        placeholder=""
                        required
                      />
                      <label className="form-label">Nombre completo</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="signup_email"
                        className="form-control"
                        required
                      />
                      <label className="form-label">Correo electrónico</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="number"
                        id="signup_phone"
                        className="form-control"
                        max="99999999"
                        required
                      />
                      <label className="form-label">Teléfono</label>
                    </div>
                  </div>
                </div>
                <div
                  className="text-white col-lg-6"
                  style={{ backgroundColor: "#1C7C54" }}
                >
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h1 className="mt-1 mb-5 pb-1">&nbsp;</h1>
                    </div>
                    <h5 className="mt-1 mb-3 pb-1">&nbsp;</h5>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="signup_password"
                        className="form-control"
                        required
                      />
                      <label className="form-label">Contraseña</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="signup_confirm_password"
                        className="form-control"
                        required
                      />
                      <label className="form-label">Confirmar contraseña</label>
                    </div>
                    <Button
                      text="Registrarse"
                      bootstrap="btn btn-block fa-lg mb-3"
                      color="#73E2A7"
                      type="submit"
                    ></Button>
                    <div>
                      <Link to="/" className="text-light">
                        Iniciar sesión
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
