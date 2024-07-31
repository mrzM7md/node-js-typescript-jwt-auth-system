import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { User } from '../entites/user.entity';

export const IsAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  // console.log('here..............');
  if (!req.headers["authorization"]) {
    return res.status(401).json({ success: false, message: "No authorization headers available" });
  }

  const header: any = req.headers["authorization"];
  const method: string = header?.split(" ")[0];
  const token: string = header?.split(" ")[1];

  if (!method || !token) {
    return res.status(401).json({ success: false, message: "Invalid auth header" });
  } else if (method !== "Bearer") {
    return res.status(401).json({ success: false, message: "Invalid auth method" });
  }

  let tokenBody: any;
  try {
    tokenBody = jwt.verify(token, process.env.SECRET_KEY as string);
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }

  if (!tokenBody.name && !tokenBody.email) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }

  const user = await User.findOne({ where: { EMail: tokenBody.email } });
  if (!user) {
    return res.status(401).json({ success: false, message: "User not found" });
  }

  // req.user_data = user;
  res.set('user_id', user.id.toString());
  req.headers.Story;
  next();
};

