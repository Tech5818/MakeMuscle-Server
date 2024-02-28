import { Document } from "mongoose";
import { IUser } from "./IUser";

export interface IAttendance extends Document {
  user: IUser["_id"];
  time: Date;
}
