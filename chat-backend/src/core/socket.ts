import http from "http";
import { Server, Socket } from "socket.io";

const createSocket  = (http: http.Server): Server => {
    const io = new Server(http);
    // const io = require('socket.io')(http);

    io.on('connection', (socket: Socket) => {
        console.log('a user connected');
        console.log(`Socket: ${socket}`);        
    });

    return io;
};

export default createSocket;