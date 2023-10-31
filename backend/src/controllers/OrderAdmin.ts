import { OrderDAO } from "../daos/OrderDAO";
import { ProductDAO } from "../daos/ProductDAO";
import { ViewableFactory } from "../models/viewableFactory";
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
  //Test
  public async confirmOrder(orderId: string) {
    //Traer la orden que se va a confirmar
    const order = await this.orderDAO.getDetail(orderId);

    //Sacar la lista con las lineas de productos
    const productLines = (<any>order).lineProducts;

    // Revisamos que cada producto exista y que hayan suficientes unidades
    for (let i = 0; i < productLines.length; i++) {
      const product = await this.productDAO.getProduct(productLines[i].id);
      if (product == undefined) {
        throw new ProductDoesNotExists(productLines[i].name);
      }
      if (product.units - productLines[i].units < 0) {
        throw new ProductNotInStock(productLines[i].name);
      }

      // Actualizamos las unidades en stock
      await this.productDAO.updateProductUnits(
        productLines[i].id,
        product.units - productLines[i].units
      );
    }

    await this.orderDAO.changeOrderState(orderId, 2);
  }
}

export { OrderAdmin };
