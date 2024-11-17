import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDashboard from './components/ProductDashboard';
import ProductUpload from './components/ProductUpload';
import Login from './components/Login';
import Register from './components/Register';
import ProductEdit from './components/ProductEdit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<ProductUpload />} />
        <Route path="/edit/:id" element={<ProductEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
