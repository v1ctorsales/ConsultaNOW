import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/index';
import Login from './pages/login';
import Consultar from './pages/consultar';

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="consultar" element={<Consultar />} />
    </Routes>
  </BrowserRouter>
);
}
