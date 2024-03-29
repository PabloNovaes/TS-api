export interface User {
    id?: string
    name: string
    email: string
    password: string
}

export interface IUserRepository {
    create(props: User): Promise<User | string>;
    find(queryId: string): Promise<User[] | User>;
    delete(id: string): Promise<object>;
}

export interface IUserUseCase extends IUserRepository { }

