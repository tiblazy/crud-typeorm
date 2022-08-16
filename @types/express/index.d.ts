import * as express from "express";
import { IUserCreate } from "../../src/interfaces/user.interface";

declare global {
  namespace Express {
    interface Request {
      validateUser: IUserCreate;
    }
  }
}
