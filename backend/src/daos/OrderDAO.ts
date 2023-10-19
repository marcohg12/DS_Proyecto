import { Double } from "mongodb";
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

  // Registrar un pedido
  public async registerOrder(
    client: string,
    orderDate: Date,
    deliveryDate: Date,
    address: string,
    priceWithDelivery: Double,
    lineProducts: [{ _id: string; name: string; units: number; price: number }],
    state: number
  ) {
    const order = new Order({
      clientRef: client,
      orderDate: orderDate,
      deliveryDate: deliveryDate,
      address: address,
      price: priceWithDelivery,
      photoOfPayment: "TEMPORAL",
      lineProducts: lineProducts,
      state: state,
    });

    const result = await order.save();
    //Actualizar foto del pago de la orden
    await Order.updateOne(
      { _id: result._id },
      { photo: "/photos/orders/" + result._id + ".png" }
    );

    return result._id;
  }
}

export { OrderDAO };
