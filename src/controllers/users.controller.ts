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

    static registerUser (req: Request, res: Response) {
        let { nome, email, senha, role } = req.body as Users;
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

    static loginUser (req: Request, res: Response) {
        let { nome, email, senha } = req.body as Users; 
        users.map(user => {
            if (user.name === nome && user.email === email && user.senha === senha) {
                res.send({ 
                    message: 'Login realizado com sucesso!'
                });
            } else {
                res.send({ 
                    message: 'Email ou senha inválidos!',
                });
            }
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