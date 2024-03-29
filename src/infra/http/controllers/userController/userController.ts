import { IUserUseCase, User } from "@interfaces/User";
import { FastifyReply, FastifyRequest } from "fastify";


export class UserController {
    constructor(
        private UserUseCase: IUserUseCase
    ) { }

    async create(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { email, name, password } = request.body as User
            const newUser = await this.UserUseCase.create({ email, name, password })

            return reply.code(201).send(newUser)
        } catch (error) {
            return reply.code(500).send(error)
        }
    }

    async find(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.params as User
            const users = await this.UserUseCase.find(!id ? "" : id)

            return reply.code(200).send(users)
        } catch (error) {
            console.log(error);

            return reply.code(500).send(error)
        }
    }

    async delete(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.body as User

            if (!id) return reply.code(500).send()

            const execute = await this.UserUseCase.delete(id)

            return reply.code(200).send(execute)
        } catch (error) {
            return reply.code(500).send(error)
        }
    }
}