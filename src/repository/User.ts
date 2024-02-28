import { user_connection } from "../config/connection";
import { Model, Schema } from "mongoose";
import { IUser } from "../types/repository/IUser";

const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  img: { type: String, required: true },
  isEnter: { type: Boolean, default: false },
  attendance: [
    { type: Schema.Types.ObjectId, ref: "Attendance", required: true },
  ],
  stat: { type: Schema.Types.ObjectId, ref: "Stat" },
});

const UserRepository: Model<IUser> = user_connection.model<IUser>(
  "User",
  userSchema
);

export default UserRepository;
