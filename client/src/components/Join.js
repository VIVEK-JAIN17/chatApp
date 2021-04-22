import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    /*  structure of react hook 
        const [stateName, setterFunction] = reactHookName(initial_state);
    */

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join A Room</h1>
                <div>
                    <input
                        type='text'
                        className='joinInput'
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input
                        type='text'
                        className='joinInput mt-20'
                        placeholder='Room'
                        onChange={(e) => setRoom(e.target.value)} />
                </div>
                <Link
                    to={`/chat?name=${name}&room=${room}`}
                    onClick={e => (!name || !room) ? e.preventDefault() : null}
                >
                    <button className='button mt-20' type='submit'>Join Room</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;