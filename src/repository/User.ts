import { user_connection } from "../config/connection";
import { Schema } from "mongoose";
import { IUser } from "../types/repository/IUser";

const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  img: { type: String, required: true },
  isEnter: { type: Boolean, default: false },
  attendance: [{ type: Schema.Types.ObjectId, required: true }],
  stat: { type: Schema.Types.ObjectId, required: true },
});

export const UserRepository = user_connection.model<IUser>("User", userSchema);
