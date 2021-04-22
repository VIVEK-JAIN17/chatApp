import React from 'react';

const Message = ({ message, name }) => (
    <div>
        {name} <div>{message}</div>
    </div>
);

export default Message;