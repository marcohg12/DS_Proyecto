import * as cartDAO from "../dao_controllers/cartDAO";
const fs = require("fs");

// Agrega un producto al carrito
// Valida que no hayan más de 5 unidades del producto en el carrito
export async function addProductToCart(
  userId: String,
  productId: String,
  units: Number
) {}

// Elimina una unidad de un producto del carrito
// Si las unidades llegan a 0, se elimina el producto totalmente del carrito
export async function deleteProductFromCart(
  userId: String,
  productId: String
) {}

// Obtiene los productos del carrito de un usuario
export async function getCart(userId: String) {}

// Genera un pedido a partir del carrito de un usuario
// Limpia los productos del carrito
export async function sendOrder(
  userId: String,
  address: String,
  totalPrice: Number,
  photoPath: String
) {}
