import { Request, Response } from "express";

import userCreateService from "../../services/user/userCreate.service";
import userListService from "../../services/user/userList.service";
import userIndexService from "../../services/user/userIndex.service";
import userUpdateService from "../../services/user/userUpdate.service";
import userDeleteService from "../../services/user/userDelete.service";

import SuccessController from "../res/sucess.controller";
import ErrorController from "../res/error.controller";

class UserController {
  static async create(req: Request, res: Response) {
    try {
      // const userData = req.body;
      const userData = req.userCreate;
      const user = await userCreateService(userData);

      SuccessController.default(res, user, 201);
    } catch (error) {
      ErrorController.default(res, error, 400);
    }
  }

  static async list(req: Request, res: Response) {
    try {
      const users = await userListService();

      SuccessController.default(res, users);
    } catch (error) {
      ErrorController.default(res, error);
    }
  }

  static async index(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await userIndexService(id);

      SuccessController.default(res, user);
    } catch (error) {
      ErrorController.default(res, error);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      // const { id } = req.params;
      // const userData = req.body;
      // const user = await userUpdateService({id, ...userData });

      const userData = req.userUpdate;
      const user = await userUpdateService({ ...userData });

      SuccessController.message(res, "User Updated", user);
    } catch (error) {
      ErrorController.default(res, error);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await userDeleteService(id);

      SuccessController.message(res, "User deleted");
    } catch (error) {
      ErrorController.default(res, error);
    }
  }
}

export default UserController;
