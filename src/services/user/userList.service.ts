import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IShowUser } from "../../interfaces/user/user.interface";

const userListService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const showUsers: IShowUser[] = users;
  showUsers.map((showUser) => delete showUser.password);

  return showUsers;
};

export default userListService;
