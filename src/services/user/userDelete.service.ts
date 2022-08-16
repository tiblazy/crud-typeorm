import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userDeleteService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const user = users.find((user) => user.id === id);

  return true;
};

export default userDeleteService;
