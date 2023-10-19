import * as orderDAO from "../dao_controllers/orderDAO";
import * as productDAO from "../dao_controllers/productDAO";
import { ProductDoesNotExists, ProductNotInStock } from "../exceptions/exceptions";

// Obtiene todos los pedidos registrados
export async function getOrders() {
    return await orderDAO.getOrders();
}

// Obtiene el detalle de un pedido
export async function getOrder(orderId: String) {
    return await orderDAO.getDetail(orderId);
}

// Obtiene todos los pedidos de un usuario
export async function getUserOrders(userId: String) {
    return await orderDAO.getOrdersUser(userId);
}

// Cambia el estado de un pedido
export async function setOrderState(orderId: String, state: Number) {
    return await orderDAO.changeOrderState(orderId,state);
}

// Confirma un pedido
// Valida que por cada producto del pedido hayan unidades suficientes o
// que el producto exista en el inventario
export async function confirmOrder(orderId: String) {
    //Traer la orden que se va a confirmar
     const order =  await orderDAO.getDetail(orderId);

     //Sacar la lista con las lineas de productos
     let productLines = order.lineProducts;

     for(let i = 0;i<productLines.length;i++){
        const product = await productDAO.getProduct(productLines[i]._id);
        if(product == undefined)  {
            throw new ProductDoesNotExists(productLines[i].name);
        }
        if(product.units-productLines[i].units < 0){
            throw new ProductNotInStock(productLines[i].name);
        }
        //Update the product stock
        productDAO.updateProduct(productLines[i]._id,product.name,product.description,
            product.units-productLines[i].units,product.price);
     }
     
     orderDAO.changeOrderState(orderId,2);
}
