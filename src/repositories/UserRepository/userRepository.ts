import { db } from "@/infra/prisma/Client";
import { IUserRepository, User } from "@/interfaces/User";
import { Bcrypt } from "@/utils/bcrypt";


export class UserRepository implements IUserRepository {
    private bcrypt = new Bcrypt()
    async close() {
        await db.$disconnect()
    }
    async create(user: User): Promise<User | string> {
        try {
            const userAlredyExists = await db.user.findFirst({
                where: { email: user.email }
            })

            if (userAlredyExists) {
                throw new Error("Este usuario já existe!")
            }

            const { password, ...rest } = user
            const newUser: User = await db.user.create({
                data: {
                    ...rest,
                    password: this.bcrypt.hash(password)
                }
            })

            return newUser
        } catch (error: any) {
            return error
        }
    }
    async find(queryId: string = ""): Promise<User[] | User> {
        try {
            if (queryId) return await db.user.findUnique({ where: { id: queryId } }) as User

            const users = await db.user.findMany({})

            return users
        } catch (error: any) {
            throw new Error("Ocorreu um erro inesperado")
        }
    }

    async delete(id: string): Promise<object> {
        try {
            const deletedUser = await db.user.delete({
                where: { id }
            })

            return { deletedUser, message: "Usuário deletado com sucesso!" }
        } catch (error: any) {
            throw new Error("Ocorreu um erro não esperado!")
        }
    }


}