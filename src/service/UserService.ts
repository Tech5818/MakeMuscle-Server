import { Service } from "typedi";
import { IUser } from "../types/repository/IUser";
import UserRepository from "../repository/User";
import StatRepository from "../repository/Stat";

@Service()
class UserService {
  constructor(
    private userRepository: typeof UserRepository,
    private statRepository: typeof StatRepository
  ) {}
  async createUser(data: IUser) {
    try {
      const user = await this.userRepository.create(data);
      const stat = await this.statRepository.create({ user: user._id });

      const newUser = await this.userRepository.updateOne(
        { _id: user._id },
        { $set: { stat: stat._id } }
      );

      return { user: newUser, stat };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async readUser(email: string) {
    try {
      const user = await this.userRepository.findOne({ email });

      if (!user) return false;

      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default UserService;
