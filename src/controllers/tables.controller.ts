import { Request, Response } from "express";

const tables = [
    {
        id: 1,
        name: 'Mesa 1',
        capacity: 4,
        status: 'Disponível'
    },
    {
        id: 2,
        name: 'Mesa 2',
        capacity: 4,
        status: 'Indisponivel'
    },
]

export class TablesContollers {
    static getAllTable(req: Request, res: Response) {
        res.send(tables.map(table => table));
    }

    static getTableById (req: Request, res: Response) {
        let { id } = req.params;
        let tableById = tables.find(table => table.id === Number(id));
        res.send(tableById);
    }
}