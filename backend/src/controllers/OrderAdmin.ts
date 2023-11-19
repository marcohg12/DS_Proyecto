import { OrderDAO } from "../daos/OrderDAO";
import { ProductDAO } from "../daos/ProductDAO";
import { Observer } from "../interfaces/interfaces";
import { Notification } from "../models/Notification";
import { startOfDay, addDays, getDay } from "date-fns";
import { CalendarEvent } from "../models/CalendarEvent";
import { DecoratedCalendarEvent } from "../models/DecoratedCalendarEvent";
import { CalendarAdmin } from "./CalendarAdmin";
import {
  ProductDoesNotExists,
  ProductNotInStock,
} from "../exceptions/exceptions";

class OrderAdmin {
  private productDAO: ProductDAO = new ProductDAO();
  private orderDAO: OrderDAO = new OrderDAO();
  private suscribers: Observer[] = [];
  private calendarAdmin: CalendarAdmin = new CalendarAdmin();

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

  // Actualiza la fecha de envío de un pedido
  public async setDeliveryDate(orderId: string) {
    const today = startOfDay(new Date());
    const deliveryDate = startOfDay(new Date());

    // Calculamos la fecha de envía al martes, jueves o sábado más inmediado
    switch (getDay(today)) {
      case 0: // Domingo
        addDays(deliveryDate, 2);
        break;
      case 1: // Lunes
        addDays(deliveryDate, 1);
        break;
      case 2: // Martes
        addDays(deliveryDate, 2);
        break;
      case 3: // Miércoles
        addDays(deliveryDate, 1);
        break;
      case 4: // Jueves
        addDays(deliveryDate, 2);
        break;
      case 5: // Viernes
        addDays(deliveryDate, 1);
        break;
      case 6: // Sábado
        addDays(deliveryDate, 3);
        break;
    }

    await this.orderDAO.setDeliveryDate(orderId, deliveryDate);
  }

  // Cambia el estado de un pedido
  public async setOrderState(orderId: string, state: number) {
    await this.orderDAO.changeOrderState(orderId, state);

    // Aprobado
    if (state === 2) {
      // Actualizamos fecha de entrega
      await this.setDeliveryDate(orderId);

      const order = await this.getOrder(orderId);

      const notification = new Notification(
        new Date(),
        "PEDIDO APROBADO",
        `Su pedido con el ID ${orderId} ha sido aprobado y será enviado el día ${order.deliveryDate}`,
        order.clientRef
      );

      // Generar la notificación al usuario
      this.notify(notification);

      // Agregar la entrada al calendario
      const baseEvent = new CalendarEvent(
        order.deliveryDate,
        1,
        "Preparar los productos y empaque del pedido",
        "ENTREGA PEDIDO"
      );

      // Decorador del campo de ID del pedido
      const orderIdField = new DecoratedCalendarEvent(
        baseEvent,
        "ID Pedido",
        orderId
      );

      console.log(order);

      // Decorador del nombre del cliente
      // Decorador de detalle de productos
      // Decorador de dirección en envío
      // Decorador de precio con envío
    }
    // Cancelado
    else if (state === 4) {
      const order = await this.getOrder(orderId);

      const notification = new Notification(
        new Date(),
        "PEDIDO CANCELADO",
        `Su pedido con el ID ${orderId} ha sido cancelado, será contactado por la administradora en los siguientes días`,
        order.clientRef
      );

      this.notify(notification);
    }
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

  public suscribe(o: Observer) {
    this.suscribers.push(o);
  }

  public unsuscribe(o: Observer) {
    const index = this.suscribers.indexOf(o);
    if (index !== -1) {
      this.suscribers.splice(index, 1);
    }
  }

  public notify(n: Notification) {
    this.suscribers.forEach((suscriber) => {
      suscriber.update(n);
    });
  }
}

export { OrderAdmin };
