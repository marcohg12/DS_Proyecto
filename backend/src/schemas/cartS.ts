import { Schema, InferSchemaType } from "mongoose";
import mongoose from "mongoose";

const cartSchema: Schema = new Schema({
  client: { type: String, required: true }, 
  products: [{productRef: { type: String, required: true }, units :{type: Number,required:true}}], //Collection   
});

export type CartT = InferSchemaType<typeof cartSchema>;

export default mongoose.model("Cart", cartSchema);