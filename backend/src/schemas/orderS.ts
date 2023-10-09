import { Schema, InferSchemaType } from "mongoose";
import mongoose from "mongoose";
import { Double } from "mongodb";

const orderSchema: Schema = new Schema({
  client: { type: String, required: true }, 
  orderDate: { type: Date, required: true },
  deliveryDate: { type: Date, required: true },
  address: { type: String, required: true },
  priceWithDelivery: { type: Double, required: true },
  photoOfPayment: { type: String, required: true },
  lineProduct: { type: [String], required: true }, //Collection
  state: { type: Number, required: true }, // 1:Pendiente, 2:Aceptado, 3:Entregado, 4:Cancelado 
});

export type OrderT = InferSchemaType<typeof orderSchema>;

export default mongoose.model("Order", orderSchema);