import { stat_connection } from "../config/connection";
import { Model, Schema } from "mongoose";
import { IStat } from "../types/repository/IStat";

const statSchema: Schema<IStat> = new Schema({
  user: { type: Schema.Types.ObjectId, required: true },
});

const StatRepository: Model<IStat> = stat_connection.model<IStat>(
  "stat",
  statSchema
);

export default StatRepository;
