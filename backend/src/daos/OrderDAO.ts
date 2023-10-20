import Order, { OrderT } from "../schemas/orderS";

class OrderDAO {
  constructor() {}

  // Obtiene todas las ordenes
  public async getOrders() {
    return await Order.find();
  }

  // Obtiene todas las ordenes de un Usuario
  public async getOrdersUser(idUser: string) {
    return await Order.find({ clientRef: idUser });
  }

  // Obtiene el detalle de una orden
  public async getDetail(orderId: string) {
    return await Order.findOne({ _id: orderId });
  }

  public async changeOrderState(orderId: string, newState: number) {
    return await Order.updateOne(
      { _id: orderId },
      { $set: { state: newState } }
    );
  }
}

export { OrderDAO };
