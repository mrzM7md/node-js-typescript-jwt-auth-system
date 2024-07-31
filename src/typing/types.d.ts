import { User } from "../entites/user.entity";

export { };

declare global {
  namespace Express {
    interface Request {
      user_data?: User;
    }
  }
}

