import { FastifyInstance } from "fastify";
import { userController } from "../controllers/implementation/userController";

export async function userRoutes(userRoutes: FastifyInstance) {
    userRoutes.get('/find', async (request, reply) => await userController.find(request, reply))
    userRoutes.get('/find/id=:id', async (request, reply) => await userController.find(request, reply))
    userRoutes.post('/user', async (request, reply) => await userController.create(request, reply))
    userRoutes.delete('/delete', async (request, reply) => await userController.delete(request, reply))
}


