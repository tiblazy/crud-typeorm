import { Router } from "express";

const routes = Router();

import UserController from "../controllers/user.controller";

// middlewares

routes.post(
  "",
  // schema,
  UserController.create
);

routes.get("", UserController.list);
routes.get("/:id", UserController.index);

routes.patch("/:id", UserController.update);
routes.delete("/:id", UserController.delete);

export default routes;
