import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import { UserController, DialogController, MessageController } from './controllers';

mongoose.connect('mongodb://localhost:27017/chat', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', err => console.log(err));
db.once('open', () => console.log('We are connected'));

const app: express.Application = express();
app.use(bodyParser.json());

const userController = new UserController();
const dialogController = new DialogController();
const messageController = new MessageController();
 
app.get("/user/:id", userController.index);
app.post("/user/registration", userController.create);
app.delete("/user/:id", userController.delete);

app.get("/dialog/:id", dialogController.index);
app.post("/dialog", dialogController.create);
app.delete("/dialog/:id", dialogController.delete);

app.get("/messages", messageController.index);
app.post("/messages", messageController.create);
app.delete("/messages/:id", messageController.delete);

app.listen(3005, () => console.log("App listening on port 3005"));