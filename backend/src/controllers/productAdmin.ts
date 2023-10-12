import { registerProduct as register } from "../dao_controllers/productDAO";
import { getProducts as getAll } from "../dao_controllers/productDAO";
const fs = require("fs");

// Crear producto -------------------------------------------------------
export async function registerProduct(
  name: String,
  description: String,
  units: Number,
  price: Number,
  path: String
) {
  const productId = await register(name, description, units, price);
  await fs.renameSync(path, "photos/products/" + productId + ".png");
}

// Editar producto ------------------------------------------------------
export async function updateProduct() {}

// Eliminar producto ----------------------------------------------------
export async function deleteProduct() {}

// Obtener productos ----------------------------------------------------
export async function getProducts() {
  const products = await getAll();
  return products;
}
