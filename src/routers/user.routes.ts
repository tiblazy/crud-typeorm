import { Router } from "express";

const routes = Router();

import UserController from "../controllers/user.controller";

import emailAlreadyExistsMiddleware from "../middlewares/emailAlreadyExists.middleware";

routes.post(
  "",
  // schemaMiddleware,
  emailAlreadyExistsMiddleware,
  UserController.create
);

routes.get(
  "",
  // schemaMiddleware,
  UserController.list
);
routes.get(
  "/:id",
  // schemaMiddleware,
  UserController.index
);

routes.patch(
  "/:id",
  // schemaMiddleware,
  UserController.update
);
routes.delete(
  "/:id",
  // schemaMiddleware,
  UserController.delete
);

export default routes;
