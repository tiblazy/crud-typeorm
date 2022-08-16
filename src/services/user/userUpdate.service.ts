import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/user.interface";
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
  // fazer for in

  if (password) {
    if (!bcrypt.compareSync(password, user!.password)) {
      await userRepository.update(user!.id, {
        password: bcrypt.hashSync(password, 10),
      });
    }
  }

  await userRepository.update(user!.id, { ...user });

  return user;
};

export default userUpdateService;
