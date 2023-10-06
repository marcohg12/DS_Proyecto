import { Schema, InferSchemaType } from "mongoose";
import mongoose from "mongoose";

const categorySchema: Schema = new Schema({
  idCategory: { type: String, required: true },
  name: { type: String, required: true },
});

export type CategoryT = InferSchemaType<typeof categorySchema>;

export default mongoose.model("Category", categorySchema);