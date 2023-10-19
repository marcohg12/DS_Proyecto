import { Schema, InferSchemaType } from "mongoose";
import mongoose from "mongoose";
import { Double } from "mongodb";

const orderSchema: Schema = new Schema({
  clientRef: { type: String, required: true },
  orderDate: { type: Date, required: true },
  deliveryDate: { type: Date },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  photoOfPayment: { type: String, required: true },
  lineProducts: { type: [{_id:String,name:String,units:Number,price:Number}], required: true }, //[{_id, name, units, price}]
  state: { type: Number, required: true }, // 1:Pendiente, 2:Aceptado, 3:Entregado, 4:Cancelado
});

export type OrderT = InferSchemaType<typeof orderSchema>;

export default mongoose.model("Order", orderSchema);
