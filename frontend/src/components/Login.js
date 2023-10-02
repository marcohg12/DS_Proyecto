import React from "react";
import Button from "./Button";
import photo from "../photos/Login_img_1.jpg";

function Login() {
  return (
    <section className="h-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h1 className="mt-1 mb-5 pb-1">Sistema Duende</h1>
                    </div>

                    <form>
                      <h5 className="mt-1 mb-3 pb-1">Iniciar sesión</h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="login_email"
                          className="form-control"
                          placeholder="email@gmail.com"
                          required
                        />
                        <label className="form-label">Correo electrónico</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="login_password"
                          className="form-control"
                          required
                        />
                        <label className="form-label">Contraseña</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <Button
                          text="Iniciar sesión"
                          bootstrap="btn btn-block fa-lg mb-3"
                          color="#73E2A7"
                          type="submit"
                        />
                        <a className="link-primary" href="#!">
                          Olvidé mi contraseña
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="col-lg-6 d-flex flex-column"
                  style={{ backgroundColor: "#1C7C54" }}
                >
                  <div className="px-3 py-3 p-md-5 mx-md-4 align-items-center">
                    <img
                      src={photo}
                      alt=""
                      className="rounded"
                      style={{ width: "325px", height: "325px" }}
                    />
                  </div>
                  <div className="text-white px-3 py-1 p-md-1 mx-md-4">
                    <div className="d-flex flex-column align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2 pb-4">
                        ¿No tiene una cuenta?
                        <br />
                        Registrese aquí
                      </p>
                      <Button
                        text="Registrarse"
                        bootstrap="btn"
                        color="#73E2A7"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
