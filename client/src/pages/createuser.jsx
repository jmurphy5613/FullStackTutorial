import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

function CreateUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const create = () => {
        Axios.post('http://localhost:3002/auth', {
            username: username,
            password: password
        })
    }
        

    return (
        <div>
            <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={create}>Create User</button>
        </div>
    );
}

export default CreateUser;