import cart, { CartT } from "../schemas/cartS";
import {
  getCart as getCartDAO,
  addProduct as addProductDAO,
  deleteProduct as deleteProductDAO,
  getProductsCart as getProductsCartDAO,
  getProductsToString as getProductsToString,
  getPriceCart as getPriceCartDAO,
  buyCart as buyCartDAO,
} from "../dao_controllers/cartDAO";

export async function getCart(idUser: String) {
  const result = await getCartDAO(idUser);
}

// Agregar un producto al carrito
// Solo pueden haber 5 unidades máximo del producto en el carrito
// Id del producto, las unidades
// Id del usuario: req.user.id

// Eliminar un producto del carrito
// Id del producto

// Productos del carrito
// Lista de productos [{idProducto, nombre, unidades en el carrito, precio por unidad, photoURL}]

// Confirmación del carrito
// String con la dirección, precio ya con el envío, foto
