import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import { UserController, DialogController, MessageController } from './controllers';
import { updateLastSeen, checkAuth } from './middlewares';
import dotenv from 'dotenv'
import { createServer } from "http";

mongoose.connect('mongodb://localhost:27017/chat', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', err => console.log(err));
db.once('open', () => console.log('We are connected ot MongoDB'));

const app: express.Application = express();
const http = createServer(app);
const io = require('socket.io')(http,
    {
        // cors: {
        //     origin: "http://localhost:3005/",
        //     methods: ["GET", "POST"]
        // }
    }
);

dotenv.config();
const PORT = process.env.PORT || 3005;

const userController = new UserController();
const dialogController = new DialogController();
const messageController = new MessageController();

app.use(bodyParser.json());
app.use(updateLastSeen);
app.use(checkAuth);

app.get("/user/me", userController.getMe);
app.get("/user/:id", userController.index);
app.post("/user/regist", userController.create);
app.delete("/user/:id", userController.delete);
app.post("/user/login", userController.login);

app.get("/dialog/:id", dialogController.index);
app.post("/dialog", dialogController.create);
app.delete("/dialog/:id", dialogController.delete);

app.get("/messages", messageController.index);
app.post("/messages", messageController.create);
app.delete("/messages/:id", messageController.delete);

io.on('connection', (socket: any) => {
    console.log('a user connected');
});

http.listen(PORT, () => console.log(`App listening on port ${PORT}`));