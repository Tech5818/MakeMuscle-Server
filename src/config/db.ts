import { Connection } from "mongoose";
import {
  user_connection,
  attendance_connection,
  equipment_connection,
  stat_connection,
} from "./connection";

export const mongo_user = (): Connection => {
  try {
    const connection = user_connection;
    console.log("Mongo DB User Database 연결 성공");
    return connection;
  } catch (error) {
    console.error("Mongo DB User Database 연결 실패");
    throw error;
  }
};

export const mongo_attendance = async (): Promise<Connection> => {
  try {
    const connection = attendance_connection;
    console.log("Mongo DB Attendance Database 연결 성공");

    return connection;
  } catch (error) {
    console.error("Mongo DB Attendance Database 연결 실패");
    throw error;
  }
};

export const mongo_eaquipment = async (): Promise<Connection> => {
  try {
    const connection = equipment_connection;
    console.log("Mongo DB Equipment Database 연결 성공");

    return connection;
  } catch (error) {
    console.error("Mongo DB Equipment Database 연결 실패");
    throw error;
  }
};

export const mongo_stat = async (): Promise<Connection> => {
  try {
    const connection = stat_connection;
    console.log("Mongo DB Stat Database 연결 성공");

    return connection;
  } catch (error) {
    console.error("Mongo DB Stat Database 연결 실패");
    throw error;
  }
};
