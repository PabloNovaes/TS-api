import fastify, { FastifyInstance } from "fastify";
import { router } from "./routes/router";

export class App {
    private app: FastifyInstance;

    constructor() {
        this.app = fastify();
        this.app.register(router);
    }

    async run(port: number) {
        try {
            await this.app.listen({
                port,
                host: '0.0.0.0'
            });
            console.log(`Server is running on port ${port}`);
        } catch (err) {
            console.log(err);
        }
    }

    getApp(): FastifyInstance {
        return this.app
    }

}

const app = new App();

app.run(3000);

export default app.getApp();
