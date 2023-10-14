import { registerProduct as register } from "../dao_controllers/productDAO";
import { getProducts as getAll } from "../dao_controllers/productDAO";
import { getProduct as get } from "../dao_controllers/productDAO";
import { deleteProduct as destroy } from "../dao_controllers/productDAO";
import { updateProduct as update } from "../dao_controllers/productDAO";
const fs = require("fs");

// Crear producto -------------------------------------------------------
export async function registerProduct(
  name: String,
  description: String,
  units: Number,
  price: Number,
  photoPath: String
) {
  const productId = await register(name, description, units, price);
  await fs.renameSync(photoPath, "photos/products/" + productId + ".png");
}

// Editar producto ------------------------------------------------------
export async function updateProduct(
  productId: String,
  name: String,
  description: String,
  units: Number,
  price: Number,
  photoPath: String
) {
  if (photoPath !== "") {
    // Eliminamos la foto anterios
    await fs.unlink("photos/products/" + productId + ".png", () => {});
    // Guardamos la nueva foto
    await fs.renameSync(photoPath, "photos/products/" + productId + ".png");
  }
  return await update(productId, name, description, units, price);
}

// Eliminar producto ----------------------------------------------------
export async function deleteProduct(productId: String) {
  await fs.unlink("photos/products/" + productId + ".png", () => {});
  await destroy(productId);
}

// Obtener productos ----------------------------------------------------
export async function getProducts() {
  return await getAll();
}

export async function getProduct(productId: String) {
  return await get(productId);
}
