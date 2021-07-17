import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function loginUser() {
        if (username.length > 0 && password.length > 0) {
            Axios.post('http://localhost:3002/auth/login', {
                username: username,
                password: password
            })
        }
    }
        

    return (
        <div>
            <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={loginUser}>Create User</button>
        </div>
    );
}

export default Login;