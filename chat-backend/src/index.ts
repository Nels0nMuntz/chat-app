import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import { UserController, DialogController, MessageController } from './controllers';
import { updateLastSeen, checkAuth } from './middlewares';
import dotenv from 'dotenv'

mongoose.connect('mongodb://localhost:27017/chat', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', err => console.log(err));
db.once('open', () => console.log('We are connected ot MongoDB'));

const app: express.Application = express();
dotenv.config();
const PORT = process.env.PORT || 3005;

const userController = new UserController();
const dialogController = new DialogController();
const messageController = new MessageController();

app.use(bodyParser.json());
app.use(updateLastSeen);
app.use(checkAuth);
 
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

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));