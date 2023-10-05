import { Schema, InferSchemaType } from "mongoose";
import mongoose from "mongoose";

const user_schema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  recover_code: { type: String },
  role: { type: Number, required: true },
});

export type UserT = InferSchemaType<typeof user_schema>;

export default mongoose.model("User", user_schema);
