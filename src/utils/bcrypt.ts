import b from "bcrypt"

export class Bcrypt {
    constructor(private bcrypt = b) { }
    hash(password: string) {
        return this.bcrypt.hashSync(password, 8)
    }

    verify(saved: string, passed: string) {
        return this.bcrypt.compareSync(saved, passed)
    }
}