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
