import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from './Home';
import ServiceDetails from './components/ServiceDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-services" element={<ServiceDetails />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;