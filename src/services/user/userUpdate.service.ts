import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate, IShowUser } from "../../interfaces/user.interface";
import bcrypt from "bcrypt";

const userUpdateService = async ({
  id,
  name,
  email,
  password,
  age,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const user = users.find((user) => user.id === id);
  const updated_at = new Date();

  name ? (user!.name = name) : user!.name;
  email ? (user!.email = email) : user!.email;
  age ? (user!.age = age) : user!.age;
  password && !bcrypt.compareSync(password, user!.password)
    ? (user!.password = bcrypt.hashSync(password, 10))
    : user!.password;

  await userRepository.update(user!.id, { ...user, updated_at });

  const showUser: IShowUser = user! ? user : {};
  delete showUser.password;

  return showUser;
};

export default userUpdateService;
