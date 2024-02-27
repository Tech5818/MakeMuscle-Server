import { Response } from "express";
import { oAuthUser } from "./oauth";

export interface passportUser extends Response {
  user: oAuthUser;
}
