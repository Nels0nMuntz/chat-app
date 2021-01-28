import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import { UserController } from './controllers';

mongoose.connect('mongodb://localhost:27017/chat', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', err => console.log(err));
db.once('open', () => console.log('We are connected'));

const app: express.Application = express();
app.use(bodyParser.json());

const userController = new UserController();

app.get("/user/:id", userController.index);
app.post("/user/registration", userController.create);
app.delete("/user/:id", userController.delete);

app.listen(3005, () => console.log("App listening on port 3005")) 