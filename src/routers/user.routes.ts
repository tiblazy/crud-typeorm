import { Router } from "express";

const routes = Router();

import UserController from "../controllers/user.controller";

import emailAlreadyExistsMiddleware from "../middlewares/emailAlreadyExists.middleware";
import {
  userCreateSchema,
  validateUserCreate,
} from "../middlewares/userCreateSchema.middleware";
import {
  userUpdateSchema,
  validateUserUpdate,
} from "../middlewares/userUpdateSchema.middleware";

routes.post(
  "",
  validateUserCreate(userCreateSchema),
  emailAlreadyExistsMiddleware,
  UserController.create
);

routes.get("", UserController.list);
routes.get("/:id", UserController.index);

routes.patch(
  "/:id",
  validateUserUpdate(userUpdateSchema),
  UserController.update
);
routes.delete("/:id", UserController.delete);

export default routes;
