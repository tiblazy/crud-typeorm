import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import bcrypt from "bcrypt";

import { SchemaOf } from "yup";
import { IUserUpdate } from "../interfaces/user.interface";
import ErrorController from "../controllers/error.controller";

export const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string(),
  email: yup.string().email(),
  password: yup
    .string()
    .transform((_, originalValue) => bcrypt.hashSync(originalValue, 10)),
  age: yup.number(),
});

export const validateUserUpdate =
  (schema: SchemaOf<IUserUpdate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;

      try {
        const validate = await schema.validate(
          { id, ...data },
          {
            abortEarly: false,
            stripUnknown: true,
          }
        );

        // req.userUpdate = validate;

        next();
      } catch (error) {
        ErrorController.default(error, res, 400);
      }
    } catch (error) {
      next(error);
    }
  };
