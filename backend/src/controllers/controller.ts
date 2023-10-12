import * as userController from "./user_admin";
import * as cartController from "./cart_admin";
import * as productController from "./productAdmin";

// Funciones de usuario ----------------------------------------------------------------

export async function registerUser(
  name: String,
  email: String,
  phone: String,
  password: String
) {
  return await userController.registerUser(name, email, phone, password);
}

// Funciones de carrito ----------------------------------------------------------------

export async function getCart(idUser: String) {
  return await cartController.getCart(idUser);
}

// Funciones de productos --------------------------------------------------------------
export async function registerProduct(
  name: String,
  description: String,
  units: Number,
  price: Number,
  photoPath: String
) {
  return await productController.registerProduct(
    name,
    description,
    units,
    price,
    photoPath
  );
}

export async function getProducts() {
  return await productController.getProducts();
}
