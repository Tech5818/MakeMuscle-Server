import { stat_connection } from "../config/connection";
import { Schema } from "mongoose";
import { IStat } from "../types/repository/IStat";

const statSchema: Schema<IStat> = new Schema({
  user: { type: Schema.Types.ObjectId, required: true },
});

export const StatRepository = stat_connection.model<IStat>(
  "Attendance",
  statSchema
);
