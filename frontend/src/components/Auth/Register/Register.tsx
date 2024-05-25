import React, { useState } from 'react';
import axios from 'axios';
import { useTheme } from '../../../styles/theme';
import '../Auth.css'; // Importando estilos CSS

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const colors = useTheme();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, { email, password });
            setMessage('Registration successful');
        } catch (error) {
            setMessage('Registration failed');
        }
    };

    return (
        <div className="container" style={{ backgroundColor: colors.background, color: colors.text }}>
            <form onSubmit={handleRegister}>
                <h2>Register</h2>
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
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                    className="input"
                    style={{ borderColor: colors.border, color: colors.text }}
                />
                <button type="submit" className="button" style={{ backgroundColor: colors.primary }}>Register</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default Register;
