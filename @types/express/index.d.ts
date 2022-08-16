import * as express from "express";
import { IUserCreate, IUserUpdate } from "../../src/interfaces/user.interface";

declare global {
  namespace Express {
    interface Request {
      userCreate: IUserCreate;
      userUpdate: IUserUpdate;
    }
  }
}
