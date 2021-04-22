import React from 'react';

const Message = ({ message, name }) => {

    let isCurrentUser = false;
    name = name.trim().toLowerCase();
    const userName = message.name;

    if (userName === name) {
        isCurrentUser = true;
    }

    if (isCurrentUser) {
        return (
            <div className='messageContainer justifyEnd'>
                <p className='sentText pr-10'>{message.name}</p>
                <div className='messageBox backgroundBlue'>
                    <div className='messagetext colorLight'>{message.text}</div>
                </div>
            </div>
        )
    } else {

        return (
            <div className='messageContainer justifyStart'>
                <p className='sentText pl-10'>{message.name}</p>
                <div className='messageBox backgroundLight'>
                    <div className='messagetext colorDark'>{message.text}</div>
                </div>
            </div>
        )
    }
};

export default Message;