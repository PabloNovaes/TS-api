import { FastifyInstance } from "fastify";
import { userRoutes } from "./userRoutes";


export async function router(fastify: FastifyInstance) {
    fastify.register(userRoutes);
}