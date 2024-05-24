import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, { name, email, password });
            setMessage('Registration successful');
        } catch (error) {
            setMessage('Registration failed');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Register</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default Register;
