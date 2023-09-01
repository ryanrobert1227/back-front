
import express from 'express';
const app = express();
import { createUser } from './controladores/create.js';




app.post('/createUser', createUser);



