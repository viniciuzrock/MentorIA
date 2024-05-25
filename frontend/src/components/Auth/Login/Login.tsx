import React, { useState } from 'react';
import axios from 'axios';
import { useTheme } from '../../../styles/theme';
import '../Auth.css'; // Importando estilos CSS
const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const colors = useTheme();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, { email, password });
            setMessage('Login successful');
        } catch (error) {
            setMessage('Login failed');
        }
    };

    return (
        <div className="container" style={{ backgroundColor: colors.background, color: colors.text }}>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="input"
                    style={{ borderColor: colors.border, color: colors.text }}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="input"
                    style={{ borderColor: colors.border, color: colors.text }}
                />
                <button type="submit" className="button" style={{ backgroundColor: colors.primary }}>Login</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default Login;
