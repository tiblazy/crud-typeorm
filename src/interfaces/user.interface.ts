import { User } from "../entities/user.entity";

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUserUpdate {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  age?: number;
}

export interface IShowUser extends Partial<User> {}
