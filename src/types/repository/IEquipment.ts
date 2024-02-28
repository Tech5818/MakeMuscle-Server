import { Document } from "mongoose";

export interface IEquipment extends Document {
  name: string;
  like: number;
  view: number;
}
