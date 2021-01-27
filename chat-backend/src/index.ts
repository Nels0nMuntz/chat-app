import express from 'express';
import mongoose from 'mongoose'
import User from './schemas/User'

mongoose.connect('mongodb://localhost:27017/chat', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.get("/", (req: any, res: any) => {
    res.send("Hallo World!")
    const kitty = new User({ email: 'hallo@domain.com' })
});
app.listen(3005, () => console.log("App listening on port 3005"))