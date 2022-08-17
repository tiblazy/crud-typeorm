import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IShowUser } from "../../interfaces/user/user.interface";

const userIndexService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  const showUser: IShowUser = user;
  delete showUser.password;

  return showUser;
};

export default userIndexService;
