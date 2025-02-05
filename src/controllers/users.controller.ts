import { Request, Response } from 'express';
import { Users } from '../models/users.models';

const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        senha: 'Doe@1998',
        role: 'client'
    },
    {
        id: 2,
        name: 'Alessandro Santos',
        email: 'santos@example.com',
        senha: 'Santos@2005',
        role: 'client'
    }
];

export class UsersController {
    static getAllUsers (req: Request, res: Response) {
        res.send(users.map(user => user));
    };

    static getUserById (req: Request, res: Response) {
        let { id } = req.params;
        let userById = users.find(user => user.id === Number(id));
        res.send(userById);
    };

    static createUser (req: Request, res: Response) {
        const { nome, email, senha, role } = req.body as Users;
        const newUser = {
            id: users.length + 1,
            name: nome,
            email: email,
            senha: senha,
            role: role
        };
        users.push(newUser);
        res.send({
            message: 'Usuário criado com sucesso!'
        });
    }

    static deleteUser (req: Request, res: Response) {
        const { id } = req.body;
        const deleteUser = users.find(user => user.id !== id);
        res.send({
            message: 'Usuario deletado com sucesso!',
            deleteUser
        });
    };
}