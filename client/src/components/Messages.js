import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
    return messages.map(({ text, name }, i) => <Message key={i} message={text} name={name} />);
};

export default Messages;