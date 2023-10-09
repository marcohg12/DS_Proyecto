import { Double } from "mongodb";
import Order, { OrderT } from "../schemas/orderS";

// Obtiene todas las ordenes 
export async function getOrders() {
    return await Order.find();
}

// Obtiene todas las ordenes de un Usuario 
export async function getOrdersUser(idUser: String) {
    return await Order.find({client: idUser});
}

// Obtiene el detalle de una orden
export async function getDetail(idOrder: String) {
    return await Order.findOne({_id: idOrder});
}

// Registrar un pedido 
export async function registerOrder(client: String, orderDate: Date, 
    deliveryDate: Date, address: String, priceWithDelivery: Double, 
    photoOfPayment: String, lineProduct: [String], state: Number) {
    const order = new Order({
        client: client, 
        orderDate: orderDate,
        deliveryDate: deliveryDate,
        address: address, 
        priceWithDelivery: priceWithDelivery,
        photoOfPayment: photoOfPayment, 
        lineProduct: lineProduct, 
        state: state 
    });
    return await order.save();
}