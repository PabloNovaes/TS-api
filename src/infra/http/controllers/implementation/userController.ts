import { UserController } from "@controllers/userController/userController";
import { UserRepository } from "@repositories/UserRepository/userRepository";
import { UserUseCase } from "@useCases/User/userUseCase";

const userRepository = new UserRepository()
const userUseCase = new UserUseCase(userRepository)

const userController = new UserController(userUseCase)

export { userController };

