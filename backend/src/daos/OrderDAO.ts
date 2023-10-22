import Order, { OrderT } from "../schemas/orderS";
import mongoose from "mongoose";

class OrderDAO {
  constructor() {}

  // Obtiene todas las ordenes
  public async getOrders() {
    return await Order.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "clientRef",
          foreignField: "_id",
          as: "userInfo",
        },
      },
      {
        $unwind: "$userInfo",
      },
      {
        $sort: { orderDate: -1 },
      },
      {
        $project: {
          "userInfo.password": 0,
          "userInfo.recoverCode": 0,
        },
      },
    ]);
  }

  // Obtiene todas las ordenes de un Usuario
  public async getOrdersUser(idUser: string) {
    return await Order.aggregate([
      {
        $match: {
          clientRef: new mongoose.Types.ObjectId(idUser),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "clientRef",
          foreignField: "_id",
          as: "userInfo",
        },
      },
      {
        $unwind: "$userInfo",
      },
      {
        $sort: { orderDate: -1 },
      },
      {
        $project: {
          "userInfo.password": 0,
          "userInfo.recoverCode": 0,
        },
      },
    ]);
  }

  // Obtiene el detalle de una orden
  public async getDetail(orderId: string) {
    const result = await Order.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(orderId),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "clientRef",
          foreignField: "_id",
          as: "userInfo",
        },
      },
      {
        $unwind: "$userInfo",
      },
      {
        $project: {
          "userInfo.password": 0,
          "userInfo.recoverCode": 0,
        },
      },
    ]);
    return result[0];
  }

  public async changeOrderState(orderId: string, newState: number) {
    return await Order.updateOne(
      { _id: orderId },
      { $set: { state: newState } }
    );
  }
}

export { OrderDAO };
