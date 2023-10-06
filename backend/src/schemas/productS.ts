import { Schema, InferSchemaType } from "mongoose";
import mongoose from "mongoose";
import { Double } from "mongodb";

const productSchema: Schema = new Schema({
  id_product: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  units: { type: Number, required: true },
  photo: { type: String, required: true },
});

export type ProductT = InferSchemaType<typeof productSchema>;

export default mongoose.model("Product", productSchema);