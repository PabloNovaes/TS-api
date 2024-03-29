import { User } from "@/interfaces/User";
import request from "supertest";
import app from "../../server";

describe("Integration testing on user entity", () => {
    const userStructure = {
        name: "jest user",
        email: `jest${Math.floor(Math.random() * (1000 - 1))}@gmail.com`,
        password: "jest"
    }

    beforeAll(async () => {
        await app.ready()
    })

    it("create new user", async () => {
        const response = await request(app.server)
            .post("/user")
            .send(userStructure)

        expect(response.status).toBe(201)

        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('password')

    })

    it("get all users", async () => {
        const response = await request(app.server).get("/find")
        expect(response.status).toBe(200)
    })

    it("throw new exception if email already() in use", async () => {
        await request(app.server).post("/user").send({
            name: "jest user",
            email: "jest@gmail.com",
            password: "jest"
        })

        const testCreateUserRule = await request(app.server)
            .post("/user")
            .send({
                name: "jest user",
                email: "jest@gmail.com",
                password: "jest"
            })

        expect(testCreateUserRule.error)
        expect(testCreateUserRule.status).toBe(500)
    })

    it("delete user by id", async () => {
        const resposne = await request(app.server).get("/find")
        const { id }: User = resposne.body[0]

        expect(id)

        const deleteUser = await request(app.server)
            .delete("/delete")
            .send({ id })

        console.log(deleteUser.body);
        expect(deleteUser)

    })

    afterAll(async () => {
        return await app.close()
    })

})