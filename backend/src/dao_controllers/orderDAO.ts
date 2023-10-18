import { Double } from "mongodb";
import Order, { OrderT } from "../schemas/orderS";

// Obtiene todas las ordenes 
export async function getOrders() {
    return await Order.find();
}

// Obtiene todas las ordenes de un Usuario 
export async function getOrdersUser(idUser: String) {
    return await Order.find({clientRef: idUser});
}

// Obtiene el detalle de una orden
export async function getDetail(idOrder: String) {
    return await Order.findOne({_id: idOrder});
}

export async function changeOrderState(idOrder:String,newState: Number){
    return await Order.updateOne({_id: idOrder},{$set: { state: newState }});
}

// Registrar un pedido 
export async function registerOrder(client: String, 
    orderDate: Date, 
    deliveryDate: Date, 
    address: String, 
    priceWithDelivery: Double, 
    lineProducts: [{_id:String,name:String,units:Number, price:Number}], 
    state: Number) {

    const order = new Order({
        clientRef: client, 
        orderDate: orderDate,
        deliveryDate: deliveryDate,
        address: address, 
        price: priceWithDelivery,
        photoOfPayment: "TEMPORAL", 
        lineProducts: lineProducts, 
        state: state 
    });

    const result = await order.save();
    //Actualizar foto del pago de la orden
    await Order.updateOne(
        {_id: result._id},
        {photo: "/photos/orders/" + result._id +".png"}
    );

    return result._id;
}