import * as productDAO from "../dao_controllers/productDAO";
const fs = require("fs");

// Registra un producto
export async function registerProduct(
  name: String,
  description: String,
  units: Number,
  price: Number,
  photoPath: String
) {
  const productId = await productDAO.registerProduct(
    name,
    description,
    units,
    price
  );
  // Guardamos la foto en el sistema de archivos
  await fs.renameSync(photoPath, "photos/products/" + productId + ".png");
}

// Actualiza los datos de un producto
export async function updateProduct(
  productId: String,
  name: String,
  description: String,
  units: Number,
  price: Number,
  photoPath: String
) {
  // Si hay una foto nueva
  if (photoPath !== "") {
    // Eliminamos la foto anterior
    await fs.unlink("photos/products/" + productId + ".png", () => {});
    // Guardamos la nueva foto
    await fs.renameSync(photoPath, "photos/products/" + productId + ".png");
  }
  return await productDAO.updateProduct(
    productId,
    name,
    description,
    units,
    price
  );
}

// Elimina un producto por su Id
export async function deleteProduct(productId: String) {
  // Eliminamos la foto del sistema de archivos
  await fs.unlink("photos/products/" + productId + ".png", () => {});
  // Eliminamos el producto de la BD
  await productDAO.deleteProduct(productId);
}

// Retorna todos los productos registrados
export async function getProducts() {
  return await productDAO.getProducts();
}

// Retorna el producto con el Id enviado por parámetro
export async function getProduct(productId: String) {
  return await productDAO.getProduct(productId);
}
