import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserCreate, IShowUser } from "../../interfaces/user/user.interface";
import bcrypt from "bcrypt";

const userCreateService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  await userRepository.find();

  const hashPassword = bcrypt.hashSync(password, 10);

  const user: IUserCreate = userRepository.create({
    name,
    email,
    password: hashPassword,
    age,
  });
  await userRepository.save(user);

  const showUser: IShowUser = user;
  delete showUser.password;

  return showUser;
};

export default userCreateService;
