import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/chat', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', err => console.log(err));
db.once('open', () => console.log('We are connected ot MongoDB'));