import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importando estilos CSS

const Header: React.FC = () => {
    return (
        <nav className="navbar"> {/* Usando a classe do CSS */}
            <Link to="/" className="logo">MentorIA</Link>
            <div className="nav-links">
                <Link to="/login" className="nav-button">Login</Link> {/* Usando a classe do CSS */}
                <Link to="/register" className="nav-button">Register</Link> {/* Usando a classe do CSS */}
            </div>
        </nav>
    );
};

export default Header;
