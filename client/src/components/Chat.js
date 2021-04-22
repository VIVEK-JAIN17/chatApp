import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';
import InfoBar from './InfoBar';
import Messages from './Messages';
import Input from './Input';

let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:8080';

    // manages the join to room event
    useEffect(() => {

        const { name, room } = queryString.parse(location.search);
        socket = io.connect(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, ({ error, name }) => {
            if (!!error) {
                alert(error)
            } else alert(`${name} has joined`);
        });


        // return happens when the componentDidUnmount() gets called
        return () => {
            socket.disconnect();
        }

    }, [ENDPOINT, location.search]);

    // manages the messages state
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={room} />
                <Messages messages={messages} />
                <Input
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    );
};


export default Chat;