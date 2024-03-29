import { User } from "@/interfaces/User";
import { Bcrypt } from "@/utils/bcrypt";

export class InMemoryUserRepository {
    private bcrypt = new Bcrypt()

    constructor(private Users: User[]) { }
    async create(data: User) {
        if (this.Users.length === 0) {
            const { password, ...rest } = data

            const newUser = {
                ...rest,
                password: this.bcrypt.hash(password)
            }

            this.Users.push(newUser)
            return newUser
        }

        const userAlreadyExist = this.Users.filter(user => {
            return user.email == data.email && user.name == data.name
        })

        if (userAlreadyExist) throw new Error('Esse email já está em uso!')

        const { password, ...rest } = data

        const newUser = {
            ...rest,
            password: await this.bcrypt.hash(password)
        }

        this.Users.push(newUser)
        return newUser

    }

    async find() {
        return this.Users
    }

    async delete(id: string): Promise<object> {
        const userIndx = this.Users.findIndex(u => u.id === id)
        const deletedUser = this.Users.splice(userIndx)[0]

        return { deletedUser, message: "Usuário deletado com sucesso!" }
    }
}