import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import "reflect-metadata";

const app = express();

dotenv.config();

// view engine setup
app.set("views", path.join(__dirname, "views"));
// app.set('view engine', 'jade');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.get("/", (req, res) => {
//   res.send(`<a href="auth/google">Google Login</a>`);
// });

import * as mongoDB from "./src/config/db.ts";

mongoDB.mongo_user();
mongoDB.mongo_attendance();
mongoDB.mongo_eaquipment();
mongoDB.mongo_stat();

import passport from "./src/auth/passportConfig.ts";
app.use(passport.initialize());

import { useExpressServer } from "routing-controllers";
import { useContainer } from "routing-controllers";
import Container from "typedi";

import AuthController from "./src/controller/AuthController.ts";

import UserRepository from "./src/repository/User.ts";
import StatRepository from "./src/repository/Stat.ts";
import UserService from "./src/service/UserService.ts";
import UserController from "./src/controller/UserController.ts";

const userService = new UserService(UserRepository, StatRepository);

Container.set(UserService, userService);

useContainer(Container);

useExpressServer(app, {
  controllers: [AuthController, UserController],
});

export default app;
