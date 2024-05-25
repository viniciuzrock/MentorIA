import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/HomeScreen';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Layout/Header';
import { ThemeProvider } from './styles/theme';
import './styles/globalStyles.css';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
