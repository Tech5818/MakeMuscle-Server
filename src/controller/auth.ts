import passport from "../auth/passportConfig";
import { Get, JsonController, Req, Res, UseBefore } from "routing-controllers";
import { Service } from "typedi";
import { oAuthUser } from "../types/oauth";
import { JwtUtil } from "../util/Jwt";
import { passportUser } from "../types/passportUser";
import { Response } from "express";

@JsonController("/auth")
@Service()
class AuthController {
  @Get("/google")
  setScope() {
    return passport.authenticate("google");
  }

  @UseBefore(
    passport.authenticate("google", { failureRedirect: "/", session: false })
  )
  @Get("/google/callback")
  setCallback(@Req() req: passportUser, @Res() res: Response) {
    const user = req.user as oAuthUser;
    console.log(user);
    const token = JwtUtil.generateToken(user);
    return res.status(200).json({ token });
  }
}

export default AuthController;
