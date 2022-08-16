import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import ErrorController from "../controllers/error.controller";

const emailAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const alreadyExists = users.find((user) => user.email === email);

  if (alreadyExists) {
    return res.status(400).json({ message: "Email in use" });
  }

  next();
};

export default emailAlreadyExistsMiddleware;
