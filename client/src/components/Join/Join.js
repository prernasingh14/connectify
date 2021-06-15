import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="heading">Join</div>
                <div><input placeholder="name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} ></input></div>
                <div><input placeholder="room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} ></input></div>
                <Link>
                    <button className="button mt-20" type="submit">
                        Join
                    </button>
                </Link>
            </div >
        </div >
    )
}

export default Join;