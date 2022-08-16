import { Request, Response } from "express";

import userCreateService from "../services/user/userCreate.service";
import userListService from "../services/user/userList.service";
import userIndexService from "../services/user/userIndex.service";
import userUpdateService from "../services/user/userUpdate.service";
import userDeleteService from "../services/user/userDelete.service";

import ErrorController from "./error.controller";

class UserController {
  static async create(req: Request, res: Response) {
    try {
      const { name, email, password, age } = req.validateUser;
      const user = await userCreateService({ name, email, password, age });

      return res.status(201).json(user);
    } catch (error) {
      ErrorController.default(error, res, 400);
    }
  }

  static async list(req: Request, res: Response) {
    try {
      const users = await userListService();

      return res.status(200).json(users);
    } catch (error) {
      ErrorController.default(error, res);
    }
  }

  static async index(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await userIndexService(id);

      return res.status(200).json(user);
    } catch (error) {
      ErrorController.default(error, res);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email, password, age } = req.body;

      const user = await userUpdateService({ id, name, email, password, age });

      return res.status(200).json({ message: "User updated", user });
    } catch (error) {
      ErrorController.default(error, res);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await userDeleteService(id);

      return res.status(200).json({ message: "User deleted" });
    } catch (error) {
      ErrorController.default(error, res);
    }
  }
}

export default UserController;
