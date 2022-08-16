import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserCreate, IShowUserCreate } from "../../interfaces/user.interface";
import bcrypt from "bcrypt";

const userCreateService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.age = age;
  user.created_at = new Date();
  user.updated_at = new Date();

  userRepository.create(user);
  await userRepository.save(user);

  const showUser: IShowUserCreate = user;
  delete showUser.password;

  return showUser;
};

export default userCreateService;
