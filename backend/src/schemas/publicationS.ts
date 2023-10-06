import { Schema, InferSchemaType } from "mongoose";
import mongoose from "mongoose";
import Category, { CategoryT } from "./categoryS";

const publicationSchema: Schema = new Schema({
  idPublication: { type: String, required: true },
  category: { type: Category, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  tags: { type: String, required: true }, //Collection
});

export type PublicationT = InferSchemaType<typeof publicationSchema>;

export default mongoose.model("Publication", publicationSchema);