import express from 'express';
import mongoose from 'mongoose'
import User from './schemas/User'

mongoose.connect('mongodb://localhost:27017/chat', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', err => console.log(err));
db.once('open', () => console.log('We are connected'))

const app = express();

app.get("/", (req: any, res: any) => {
    res.send("Hallo World!")
    const user = new User({ email: 'hallo@domain.com', fullname: 'Andrew' });
    user.save().then((response) => console.log(response));
});
app.listen(3005, () => console.log("App listening on port 3005"))