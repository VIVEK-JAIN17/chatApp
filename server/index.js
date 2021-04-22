const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');
const cors = require('cors');

const { addUser, removeUser, getUser } = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('we have a new connection !!');

    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        console.log(error, user);

        if (!!error) {
            return callback(error);
        } else if (!!user) {
            socket.join(user.room);
            callback(user);
        }
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        if (!!user) {
            io.to(user.room).emit('message', { name: user.name, text: message });
            callback();
        }
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        console.log(`${user.name} has left !!`);
    });
})


app.use(router);
app.use(cors());

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server is started at ${PORT}`));
