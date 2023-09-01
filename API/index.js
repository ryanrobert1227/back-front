import express from 'express';
const app = express();
import { createUser } from './controladores/create'; 


app.get('/', createUser);


const port = 3000;
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
