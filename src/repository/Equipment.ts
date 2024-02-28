import { equipment_connection } from "../config/connection";
import { Schema } from "mongoose";
import { IEquipment } from "../types/repository/IEquipment";

const equipmentSchema: Schema<IEquipment> = new Schema({
  name: { type: String, required: true },
  like: { type: Number, default: 0 },
  view: { type: Number, default: 0 },
});

const EquipmentRepository = equipment_connection.model<IEquipment>(
  "Equipment",
  equipmentSchema
);

export default EquipmentRepository;
