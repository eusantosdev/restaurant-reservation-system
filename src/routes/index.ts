import express from 'express';
import { tableRoutes } from './tables.routes';
import { usersRoutes } from './users.routes';
import { reservationRouters } from './reservations.routes';

export const routes = (app: express.Express) => {
    app.use(express.json());// Data format JSON
    app.use(
        tableRoutes,
        usersRoutes,
        reservationRouters
    );
}