import React, { createContext, useContext, ReactNode } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';

interface Theme {
  background: string;
  text: string;
  primary: string;
  border: string;
  placeholder: string;
}

const lightTheme: Theme = {
  background: '#fff',
  text: '#000',
  primary: '#4CAF50',
  border: '#ccc',
  placeholder: '#999',
};

const darkTheme: Theme = {
  background: '#000',
  text: '#fff',
  primary: '#4CAF50',
  border: '#555',
  placeholder: '#888',
};

const ThemeContext = createContext(lightTheme);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const themeColors = colorScheme === 'dark' ? darkTheme : lightTheme;

  return <ThemeContext.Provider value={themeColors}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
