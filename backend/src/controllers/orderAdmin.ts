import * as orderDAO from "../dao_controllers/orderDAO";

// Obtiene todos los pedidos registrados
export async function getOrders() {}

// Obtiene el detalle de un pedido
export async function getOrder(orderId: String) {}

// Obtiene todos los pedidos de un usuario
export async function getUserOrders(userId: String) {}

// Cambia el estado de un pedido
export async function setOrderState(orderId: String, state: Number) {}

// Confirma un pedido
// Valida que por cada producto del pedido hayan unidades suficientes o
// que el producto exista en el inventario
export async function confirmOrder(orderId: String) {}
