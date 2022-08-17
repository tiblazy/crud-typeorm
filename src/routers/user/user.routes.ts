import { Router } from "express";

const routes = Router();

import UserController from "../../controllers/user/user.controller";

import emailAlreadyExistsMiddleware from "../../middlewares/auth/user/emailAlreadyExists.middleware";
import {
  validateUserCreateMiddleware,
  userCreateSchema,
} from "../../middlewares/validation/user/userCreateSchema.middleware";
import {
  validateUserUpdateMiddleware,
  userUpdateSchema,
} from "../../middlewares/validation/user/userUpdateSchema.middleware";

routes.post(
  "",
  validateUserCreateMiddleware(userCreateSchema),
  emailAlreadyExistsMiddleware,
  UserController.create
);

routes.get("", UserController.list);
routes.get("/:id", UserController.index);

routes.patch(
  "/:id",
  validateUserUpdateMiddleware(userUpdateSchema),
  UserController.update
);
routes.delete("/:id", UserController.delete);

export default routes;
