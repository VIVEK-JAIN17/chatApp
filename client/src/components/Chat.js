import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';

let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:8080';

    useEffect(() => {

        const { name, room } = queryString.parse(location.search);
        console.log(location.search);
        console.log(name, room);

        socket = io.connect(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, ({ error }) => {
            alert(error);
        });


        // return happens when the componentDidUnmount() gets called
        return () => {
            socket.disconnect();
        }

    }, [ENDPOINT, location.search]);

    return (
        <h1>Chat Component</h1>
    )
};


export default Chat;