import http from "http";
import { Server, Socket } from "socket.io";

const createSocket  = (http: http.Server): Server => {
    const io = new Server(http, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST", "DELETE"]
        }
    });
    // const io = require('socket.io')(http);

    io.on('connection', (socket: Socket) => {
        console.log('a user connected to the socket connection');        
    });

    return io;
};

export default createSocket;