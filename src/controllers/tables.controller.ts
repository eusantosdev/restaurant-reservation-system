import { Request, Response } from "express";
import { Tables } from "../models/tables.models";

const tables = [
    {
        id: 1,
        nome: 'Mesa 1',
        capacidade: 4,
        status: 'Disponível'
    },
    {
        id: 2,
        nome: 'Mesa 2',
        capacidade: 4,
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

    static createTable (req: Request, res: Response) {
        let { nome, capacidade, status } = req.body as Tables;
        let newTable = {
            id: tables.length + 1,
            nome: nome,
            capacidade: capacidade,
            status: status
        }
        tables.push(newTable);
        res.send({
            message: 'Mesa criada com sucesso!'
        });
    }

    static deleteTable (req: Request, res: Response) {
        
    }
}