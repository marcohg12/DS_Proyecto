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

// Registra un producto -------------
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

// Obtiene todos los productos registrados -----------
export async function getProducts() {
  return await productController.getProducts();
}

// Obtiene un producto por su id ---------------------
export async function getProduct(productId: String) {
  return await productController.getProduct(productId);
}

// Elimina un producto por su id ---------------------
export async function deleteProduct(productId: String) {
  return await productController.deleteProduct(productId);
}

// Actualiza los datos de un producto ----------------
export async function updateProduct(
  productId: String,
  name: String,
  description: String,
  units: Number,
  price: Number,
  photoPath: String
) {
  return await productController.updateProduct(
    productId,
    name,
    description,
    units,
    price,
    photoPath
  );
}
