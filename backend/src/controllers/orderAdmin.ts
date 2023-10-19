import { OrderDAO } from "../daos/OrderDAO";
import { ProductDAO } from "../daos/ProductDAO";
import { ViewableFactory } from "../models/ViewableFactory";
import {
  ProductDoesNotExists,
  ProductNotInStock,
} from "../exceptions/exceptions";

class OrderAdmin {
  private productDAO: ProductDAO = new ProductDAO();
  private orderDAO: OrderDAO = new OrderDAO();
  private viewableFactory: ViewableFactory = new ViewableFactory();
  constructor() {}

  // Obtiene todos los pedidos registrados
  public async getOrders() {
    return await this.orderDAO.getOrders();
  }

  // Obtiene el detalle de un pedido
  public async getOrder(orderId: string) {
    return await this.orderDAO.getDetail(orderId);
  }

  // Obtiene todos los pedidos de un usuario
  public async getUserOrders(userId: string) {
    return await this.orderDAO.getOrdersUser(userId);
  }

  // Cambia el estado de un pedido
  public async setOrderState(orderId: string, state: number) {
    return await this.orderDAO.changeOrderState(orderId, state);
  }

  // Confirma un pedido
  // Valida que por cada producto del pedido hayan unidades suficientes o
  // que el producto exista en el inventario
  public async confirmOrder(orderId: string) {
    //Traer la orden que se va a confirmar
    const order = await this.orderDAO.getDetail(orderId);

    //Sacar la lista con las lineas de productos
    let productLines = order.lineProducts;

    for (let i = 0; i < productLines.length; i++) {
      const product = await this.productDAO.getProduct(productLines[i]._id);
      if (product == undefined) {
        throw new ProductDoesNotExists(productLines[i].name);
      }
      if (product.units - productLines[i].units < 0) {
        throw new ProductNotInStock(productLines[i].name);
      }

      const productToUpdate = this.viewableFactory.createProduct(
        product.name,
        product.description,
        product.units - productLines[i].units,
        product.price,
        product.photo,
        productLines[i]._id
      );
      //Update the product stock
      await this.productDAO.updateProduct(productToUpdate);
    }

    await this.orderDAO.changeOrderState(orderId, 2);
  }
}

export { OrderAdmin };
