import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, { email, password });
            console.log(process.env.REACT_APP_API_URL);
            localStorage.setItem('token', response.data.token);
            setMessage('Login successful');
        } catch (error) {
            setMessage('Login failed');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default Login;
