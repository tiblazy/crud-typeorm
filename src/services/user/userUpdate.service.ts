import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate, IShowUser } from "../../interfaces/user/user.interface";
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
  const update: IUserUpdate = {
    id,
    name: name ? name : user!.name,
    email: email ? email : user!.email,
    age: age ? age : user!.age,
    password: password ? password : user!.password,
  };

  const userUpdate = Object.assign(user!, update);

  password && !bcrypt.compareSync(password, user!.password)
    ? (user!.password = bcrypt.hashSync(password, 10))
    : user!.password;

  await userRepository.update(user!.id, { ...userUpdate });

  const showUser: IShowUser = user!;
  delete showUser.password;

  return showUser;
};

export default userUpdateService;
