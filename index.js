import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


import Connection from './database/db.js';
import Routes from './server/route.js';
import dontenv from 'dotenv';

dontenv.config();

const PORT = process.env.PORT;

const app = express();  

app.use(cors());

app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Routes);

Connection();

app.listen(PORT, () => console.log (`SERVER IS RUNNING YEAY on ${PORT}`));