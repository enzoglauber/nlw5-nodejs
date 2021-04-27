import './database';

import express from 'express';
import { routes } from './routes';
import createConnection from './database';
const app = express();

createConnection();
app.use(express.json())
app.use(routes);


app.get("/", (resquest, response) => {
  return response.json({ message: "Olá NLW 05!" })
})

app.post("/", (resquest, response) => {
  return response.json({ message: "Usuário salvo com sucesso!" })
})

app.listen(3333, () => console.log(`Server is running on port 3333`));
