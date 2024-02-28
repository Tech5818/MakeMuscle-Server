import { attendance_connection } from "../config/connection";
import { Schema } from "mongoose";
import { IAttendance } from "../types/repository/IAttendance";

const attendanceSchema: Schema<IAttendance> = new Schema({
  user: { type: Schema.Types.ObjectId, required: true },
  time: { type: Date, default: Date.now() },
});

export const AttendanceRepository = attendance_connection.model<IAttendance>(
  "Attendance",
  attendanceSchema
);
