import express from 'express';
import { ReservationsController } from '../controllers/reservatios.controller';

export const reservationRouters = express.Router();

reservationRouters.get('/reservas', ReservationsController.getAllReservations);
reservationRouters.get('/reservas/:id', ReservationsController.getReservationById);