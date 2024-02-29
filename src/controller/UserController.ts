import {
  Body,
  Get,
  JsonController,
  Post,
  QueryParam,
  Res,
} from "routing-controllers";
import { Service } from "typedi";
import UserService from "../service/UserService";
import { IUser } from "../types/repository/IUser";
import { Response } from "express";

@JsonController("/user")
@Service()
class UserController {
  constructor(private userService: UserService) {}

  @Post("/create")
  async createUser(@Body() body: IUser, @Res() res: Response) {
    try {
      const user = await this.userService.createUser(body);

      return res.status(201).json({ data: user });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  @Get("/read")
  async readUser(@QueryParam("email") email: string, @Res() res: Response) {
    try {
      const user = await this.userService.readUser(email);

      if (!user)
        return res
          .status(404)
          .json({ error: "해당 email을 가지는 유저는 존재하지 않습니다." });

      return res.status(200).json({ data: user });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export default UserController;
