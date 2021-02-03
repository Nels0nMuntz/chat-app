import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import { UserController, DialogController, MessageController } from './controllers';
import { updateLastSeen, checkAuth } from './middlewares';
import dotenv from 'dotenv'
import { createServer } from "http";
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 3005;

import './core/DB';
import createRoutes from "./core/routes";
import createSocket from "./core/socket";

const app: express.Application = express();
const http = createServer(app);
const io = createSocket(http);
// app.use(cors());

createRoutes(app, io);

http.listen(PORT, () => console.log(`App listening on port ${PORT}`));