import { React, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import { sanitize_name, sanitize_email } from "../scripts/data_sanitizer";
import { BACKEND_ROUTE } from "../scripts/constants";
import MessageModal from "./MessageModal";

function Signup() {
  const [signup_name, set_signup_name] = useState("");
  const [signup_email, set_signup_email] = useState("");
  const [signup_phone, set_signup_phone] = useState("");
  const [signup_password_1, set_signup_password_1] = useState("");
  const [signup_password_2, set_signup_password_2] = useState("");
  const [show_modal, set_show_modal] = useState(false);
  const [error, set_error] = useState(false);
  const [modal_msg, set_modal_msg] = useState("");

  const register_user = (name, email, phone, password) => {
    axios({
      method: "post",
      data: {
        name: name,
        email: email,
        phone: phone,
        password: password,
      },
      withCredentials: true,
      url: BACKEND_ROUTE + "/signup",
    }).then((res) => {
      handle_response(res.data);
    });
  };

  const validate_data_format = () => {
    // Validamos que las contraseñas sean igualdes
    if (signup_password_1 === signup_password_2) {
      return true;
    }
    return false;
  };

  const handle_response = (response) => {
    if (response.error) {
      handle_error(response.message);
    } else {
      handle_success(response.message);
    }
  };

  const handle_error = (message) => {
    set_modal_msg(message);
    set_show_modal(true);
    set_error(true);
  };

  const handle_success = (message) => {
    set_modal_msg(message);
    set_show_modal(true);
    set_error(false);
  };

  const send_form = (event) => {
    event.preventDefault();
    const valid = validate_data_format();
    if (!valid) {
      handle_error("Las contraseñas deben ser iguales");
      return;
    }

    // Limpiamos los datos
    let name = sanitize_name(signup_name);
    let email = sanitize_email(signup_email);

    // Mandamos a registrar el usuario
    register_user(name, email, signup_phone, signup_password_1);
  };

  const close_modal = () => {
    set_show_modal(false);
  };

  return (
    <div className="container py-5 h-100">
      <MessageModal
        message={modal_msg}
        is_open={show_modal}
        close={close_modal}
        error={error}
      ></MessageModal>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <form onSubmit={send_form}>
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
                        onChange={(e) => set_signup_name(e.target.value)}
                        required
                      />
                      <label className="form-label">Nombre completo</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="signup_email"
                        className="form-control"
                        onChange={(e) => set_signup_email(e.target.value)}
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
                        onChange={(e) => set_signup_phone(e.target.value)}
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
                        onChange={(e) => set_signup_password_1(e.target.value)}
                        required
                      />
                      <label className="form-label">Contraseña</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="signup_confirm_password"
                        className="form-control"
                        onChange={(e) => set_signup_password_2(e.target.value)}
                        required
                      />
                      <label className="form-label">Confirmar contraseña</label>
                    </div>
                    <Button
                      text="Registrarse"
                      bootstrap="btn btn-block fa-lg mb-3 link-dark"
                      color="#73E2A7"
                      type="submit"
                      width="150px"
                    ></Button>
                    <div>
                      <Link to="/" className="link-light">
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
