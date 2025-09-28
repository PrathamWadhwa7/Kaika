import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartIcon from './CartIcon';
import ContactFormModal from './ContactFormModal';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on the service details page
  const isServicePage = location.pathname === '/all-services';

  useEffect(() => {
    // Only add scroll effect on home page, not on service page
    if (isServicePage) {
      setScrolled(true); // Always show as solid on service page
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isServicePage]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/kaika.png" alt="Kaika Logo" />
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-services">Services</Link></li>
            <li><a href="#service-provider">Service Provider</a></li>
            <li><a href="#about">About us</a></li>
          </ul>
        </nav>
        <div className="cta" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <CartIcon />
          <Link to="/all-services">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
      </div>
      
      {/* Contact Form Modal */}
      <ContactFormModal />
    </header>
  );
};

export default Header;
