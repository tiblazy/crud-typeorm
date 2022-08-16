import { User } from "../entities/user.entity";

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IShowUserCreate extends Partial<User> {}

export interface IUserUpdate {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  age?: number;
}

export interface IShowUserUpdate extends Partial<User> {}
