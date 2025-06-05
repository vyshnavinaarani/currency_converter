import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/LoginPage';
import Register from './components/RegisterPage';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/converter" element={<CurrencyConverter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
