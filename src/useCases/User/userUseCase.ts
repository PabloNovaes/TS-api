import { IUserRepository, IUserUseCase, User } from "@interfaces/User";

export class UserUseCase implements IUserUseCase {
    constructor(
        private UserRepository: IUserRepository
    ) { }

    async create(data: User): Promise<User | string> {
        try {
            const user = await this.UserRepository.create(data)
            return user
        } catch (error: any) {
            throw error
        }
    }

    async find(queryId: string = ""): Promise<User[] | User> {
        try {
            const user = await this.UserRepository.find(queryId)

            return user
        } catch (error: any) {
            throw error
        }
    }

    async delete(id: string): Promise<object> {
        try {
            const deletedUser = await this.UserRepository.delete(id)

            return deletedUser
        } catch (error) {
            throw error
        }
    }
}
