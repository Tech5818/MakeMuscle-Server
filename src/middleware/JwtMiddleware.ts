import {
  ExpressMiddlewareInterface,
  UnauthorizedError,
} from "routing-controllers";
import { Request, Response, NextFunction } from "express";
import { JwtUtil } from "../util/Jwt";

export class JwtMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedError("토큰이 포함되어 있지 않습니다.");
    }

    const token = authHeader!.replace("Bearer ", "");

    req.user = JwtUtil.verifyToken(token);

    next();
  }
}
