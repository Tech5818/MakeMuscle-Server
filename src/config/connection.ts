import mongoose, { Connection } from "mongoose";
import { config } from "dotenv";
config();

const UserDatabase = process.env.MONGO_URL_USER;
const AttendanceDatabase = process.env.MONGO_URL_ATTENDANCE;
const EquipmentDatabase = process.env.MONGO_URL_EQUIPMENT;
const StatDatabase = process.env.MONGO_URL_STAT;

export const user_connection: Connection = mongoose.createConnection(
  UserDatabase!
);
export const attendance_connection: Connection = mongoose.createConnection(
  AttendanceDatabase!
);
export const equipment_connection: Connection = mongoose.createConnection(
  EquipmentDatabase!
);
export const stat_connection: Connection = mongoose.createConnection(
  StatDatabase!
);
