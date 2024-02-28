import { Body, JsonController, Post, Res } from "routing-controllers";
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
}

export default UserController;
