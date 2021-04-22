const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('conection', (socket) => {
    console.log('we have a new connection !!');
    socket.on('discnnect', () => console.log('user has left !!'));
})


app.use(router);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server is started at ${PORT}`));
