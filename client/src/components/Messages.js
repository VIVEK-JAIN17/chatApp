import React from 'react';
import Message from './Message';

const Messages = ({ messages, name }) => (
    <div className='messages'>
        { messages.map((message, i) => <Message key={i} message={message} name={name} />)}
    </div>
);

export default Messages;