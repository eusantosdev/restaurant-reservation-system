import express from 'express';
import { routes } from './routes';

const app = express();

const port = 3000;
const hostname = "127.0.0.1";

routes(app);

app.listen(port, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}`);
});