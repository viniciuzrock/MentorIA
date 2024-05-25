import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface Theme {
    background: string;
    text: string;
    primary: string;
    border: string;
    placeholder: string;
}

const theme = {
    light: {
        background: '#f0fdf4',
        text: '#2e4a36',
        primary: '#4caf50',
        border: '#c8e6c9',
        placeholder: '#9e9e9e',
    },
    dark: {
        background: '#2e4a36',
        text: '#f0fdf4',
        primary: '#4caf50',
        border: '#81c784',
        placeholder: '#9e9e9e',
    },
};

const initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? theme.dark : theme.light;

export const ThemeContext = createContext<Theme>(initialTheme);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(initialTheme);

    useEffect(() => {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setCurrentTheme(isDarkMode ? theme.dark : theme.light);
    }, []);

    return (
        <ThemeContext.Provider value={currentTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
