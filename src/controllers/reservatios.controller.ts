import { Request, Response } from "express";

const reservations = [
    {
        id: 1,
        usuario_id: 1,
        mesa_id: 1,
        data_reserva: "2022-01-01",
        status: "ativo"
    }
]

export class ReservationsController {
    static getAllReservations (req: Request, res: Response) {
        res.send(reservations.map(reservation => reservation));
    }

    static getReservationById (req: Request, res: Response) {
        let { id } = req.params;
        let reservationById = reservations.find(reservation => reservation.id === Number(id));
        res.send(reservationById);
    }
}