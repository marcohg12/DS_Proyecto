import * as userController from "./user_admin";
import * as cartController from "./cart_admin";

// Funciones de usuario ----------------------------------------------------------------

export async function registerUser(
  name: String,
  email: String,
  phone: String,
  password: String
) {
  return await userController.registerUser(name, email, phone, password);
}

// Funciones de cliente ----------------------------------------------------------------

export async function getCart(idUser: String){
  return await cartController.getCart(idUser);
}

// Funciones de administrador ----------------------------------------------------------
