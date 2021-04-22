const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('we have a new connection !!');

    socket.on('join', ({ name, room }, sendBakcToFront) => {
        console.log(`${name} has joined room ${room}`)

        const error = true;
        if (error) {
            sendBakcToFront({ error: 'error' });
        }
    });

    socket.on('disconnect', () => console.log('user has left !!'));
})


app.use(router);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server is started at ${PORT}`));
