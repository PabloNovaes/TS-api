import { FastifyInstance } from "fastify";
import { userController } from "../controllers/implementation/userController";

export async function userRoutes(userRoutes: FastifyInstance) {
    userRoutes.get('/users', async (request, reply) => await userController.find(request, reply))
    userRoutes.get('/users/id=:id', async (request, reply) => await userController.find(request, reply))
    userRoutes.post('/users/create', async (request, reply) => await userController.create(request, reply))
    userRoutes.delete('/users/delete', async (request, reply) => await userController.delete(request, reply))
}


