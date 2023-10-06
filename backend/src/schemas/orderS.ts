import { Schema, InferSchemaType } from "mongoose";
import mongoose from "mongoose";
import User, { UserT } from "./userS";
import { Double } from "mongodb";

const orderSchema: Schema = new Schema({
  idOrder: { type: String, required: true },
  client: { type: User, required: true }, 
  orderDate: { type: Date, required: true },
  deliveryDate: { type: Date, required: true },
  address: { type: String, required: true },
  priceWithDelivery: { type: Double, required: true },
  photoOfPayment: { type: String, required: true },
  lineProduct: { type: String, required: true }, //Collection
  estate: { type: Number, required: true }, // 1:Pendiente, 2:Aceptado, 3:Entregado, 4:Cancelado 
});

export type OrderT = InferSchemaType<typeof orderSchema>;

export default mongoose.model("Order", orderSchema);