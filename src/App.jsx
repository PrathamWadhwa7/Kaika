import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from './Home';
import ServiceDetails from './components/ServiceDetails';
import ProviderApplication from './components/Provider';
import StickyContact from './components/StickyContact';
import './App.css';

function App() {
  useEffect(() => {
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
  }, []);

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-services" element={<ServiceDetails />} />
            <Route path="/service-provider" element={<ProviderApplication />} />
          </Routes>
        </Router>
        <StickyContact />
      </CartProvider>
    </div>
  );
}

export default App;