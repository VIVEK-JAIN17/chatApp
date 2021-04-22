import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    /*  structure of react hook 
        const [stateName, setterFunction] = reactHookName(initial_state);
    */

    return (
        <div className='joinOuterComponent'>
            <div className='joinInnerComponent'>
                <h1 className='heading'>Join</h1>
                <div>
                    <input
                        type='text'
                        className='joinInput'
                        placeholder=''
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input
                        type='text'
                        className='joinInput'
                        placeholder=''
                        onChange={(e) => setRoom(e.target.value)} />
                </div>
                <Link
                    to={`/chat?name=${name}&room=${room}`}
                    onClick={e => (!name || !room) ? e.preventDefault() : null}
                >
                    <button className='button mt-20' type='submit'>Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;