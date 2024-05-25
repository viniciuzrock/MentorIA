import React from 'react';
import { useTheme } from '../../styles/theme';
import './Home.css';

const HomeScreen: React.FC = () => {
    const colors = useTheme();

    return (
        <div className="home-container" style={{ backgroundColor: colors.background, color: colors.text }}>
            <h1>Welcome to Mental Health Platform</h1>
            <p>Your mental well-being is our priority. Explore our resources and tools to help you feel better.</p>
        </div>
    );
};

export default HomeScreen;
