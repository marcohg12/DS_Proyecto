import { Schema, InferSchemaType } from "mongoose";
import mongoose from "mongoose";
import User, { UserT } from "./userS";
import Product, { ProductT } from "./productS";

const cartSchema: Schema = new Schema({
  idCarrito: { type: String, required: true },
  client: { type: User, required: true }, 
  prodcuts: { type: Product, required: true }, //Collection   
});

export type CartT = InferSchemaType<typeof cartSchema>;

export default mongoose.model("Cart", cartSchema);