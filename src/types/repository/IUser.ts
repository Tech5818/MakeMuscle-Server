import { Document } from "mongoose";
import { IAttendance } from "./IAttendance";
import { IStat } from "./IStat";

export interface IUser extends Document {
  name: string;
  password: string;
  email: string;
  img: string;
  isEnter: boolean;
  attendance?: IAttendance["_id"][];
  stat: IStat["_id"];
}
