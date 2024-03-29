import { User } from "@/interfaces/User"
import { InMemoryUserRepository } from "../../repositories/UserRepository/InMemoryUserRepository"
import { UserUseCase } from "./userUseCase"

describe("Unit testing on user entity", () => {
    let userUseCase: UserUseCase
    const userStructure: User = {
        id: "77c6d370-138f-40c2-b96f-652a369dabdf",
        name: "User Name",
        email: "test@gmail.com",
        password: "test"
    }

    beforeAll(() => {
        const inMemoryUserRepository = new InMemoryUserRepository([])
        userUseCase = new UserUseCase(inMemoryUserRepository)
    })

    it("create new user", async () => {
        const user = await userUseCase.create(userStructure) as User

        expect(user).toHaveProperty('id')
        expect(user).toHaveProperty('name')
        expect(user).toHaveProperty('email')
        expect(user).toHaveProperty('password')

    })

    it("get all users", async () => {
        const users = await userUseCase.find()
        expect(users).toHaveLength(1)
    })

    it("throw new exception if email already in use", async () => {
        const wrapperFunction = async () => (
            await userUseCase.create(userStructure)
        )

        expect(wrapperFunction).rejects.toThrow("Esse email já está em uso!")
    })

    it("delete user by id", async () => {
        const deletedUser = await userUseCase.delete(userStructure.id || "") as { message: string, deletedUser: User }
        console.log(deletedUser);


        expect(deletedUser.message).toBe("Usuário deletado com sucesso!")
    })
})