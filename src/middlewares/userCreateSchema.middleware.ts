import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import bcrypt from "bcrypt";

import { SchemaOf } from "yup";
import { IUserCreate } from "../interfaces/user.interface";
import ErrorController from "../controllers/error.controller";

export const userCreateSchema: SchemaOf<IUserCreate> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .transform((_, originalValue) => bcrypt.hashSync(originalValue, 10)),
  age: yup.number().required(),
});

export const validateUserCreate =
  (schema: SchemaOf<IUserCreate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validate = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        // req.userCreate = validate;

        next();
      } catch (error) {
        ErrorController.default(error, res, 400);
      }
    } catch (error) {
      next(error);
    }
  };
