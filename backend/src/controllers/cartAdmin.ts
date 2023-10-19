import { CartDAO } from "../daos/CartDAO";
const fs = require("fs");

class CartAdmin {
  private cartDAO: CartDAO = new CartDAO();

  constructor() {}

  // Agrega un producto al carrito
  // Valida que no hayan más de 5 unidades del producto en el carrito
  public async addProductToCart(
    userId: string,
    productId: string,
    units: number
  ) {
    return await this.cartDAO.addProduct(productId, units, userId);
  }

  // Elimina una unidad de un producto del carrito
  // Si las unidades llegan a 0, se elimina el producto totalmente del carrito
  public async deleteProductFromCart(userId: string, productId: string) {
    return await this.cartDAO.deleteProduct(productId, 1, userId);
  }

  // Obtiene los productos del carrito de un usuario
  public async getCart(userId: string) {
    return await this.cartDAO.getCart(userId);
  }

  // Genera un pedido a partir del carrito de un usuario
  // Limpia los productos del carrito
  public async sendOrder(
    userId: string,
    address: string,
    totalPrice: number,
    photoPath: string
  ) {}
}

export { CartAdmin };
