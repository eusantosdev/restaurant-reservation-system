import express from 'express';
import { UsersController } from '../controllers/users.controller';

export const usersRoutes = express.Router();

usersRoutes.get('/usuarios', UsersController.getAllUsers);
usersRoutes.get('/usuarios/:id', UsersController.getUserById);
usersRoutes.post('/usuarios/registrar', UsersController.registerUser);
usersRoutes.post('/usuarios/login', UsersController.loginUser);

usersRoutes.delete('/usuarios/:id', UsersController.deleteUser);
