import { Document } from "mongoose";
import { IUser } from "./IUser";

export interface IStat extends Document {
  user: IUser["_id"];
}
