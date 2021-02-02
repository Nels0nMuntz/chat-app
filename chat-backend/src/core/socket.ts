import http from "http";

const createSocket  = (http: http.Server) => {
    const io = require('socket.io')(http, {
        // cors: {
        //     origin: "http://localhost:3005/",
        //     methods: ["GET", "POST"]
        // }
    });

    io.on('connection', (socket: any) => {
        console.log('a user connected');
    });

    return io
};

export default createSocket;