import jwt from "jsonwebtoken";
import { oAuthUser } from "../types/oauth";
import { config } from "dotenv";

config();

export class JwtUtil {
  private static readonly secret_key = process.env.SECRET_KEY!;

  static verifyToken(token: string) {
    try {
      return jwt.verify(token, this.secret_key);
    } catch (error) {
      console.error(error);
    }
  }

  static generateToken(user: oAuthUser) {
    try {
      return jwt.sign(
        {
          id: user.id,
          name: user.displayName,
          email: user.emails[0].value,
        },
        this.secret_key
      );
    } catch (error) {
      console.error(error);
    }
  }
}
