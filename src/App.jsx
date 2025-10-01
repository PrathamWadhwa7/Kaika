import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ProviderApplication from "./components/Provider"; // import the component
import "./App.css";
import StickyContact from "./components/StickyContact";

function App() {
  useEffect(() => {
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
  }, []);

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-provider" element={<ProviderApplication />} />
      </Routes>
    </Router>
    <StickyContact />
    </>
  );
}

export default App;