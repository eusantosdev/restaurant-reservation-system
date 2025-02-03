import express from 'express';
import { TablesContollers } from '../controllers/tables.controller';

export const tableRoutes = express.Router();

tableRoutes.get('/mesas', TablesContollers.getAllTable);
tableRoutes.get('/mesas/:id', TablesContollers.getTableById);