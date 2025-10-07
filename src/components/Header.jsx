import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartIcon from './CartIcon';
import ContactFormModal from './ContactFormModal';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ✅ updated: dynamic style for active + hover + scroll + inner pages
  const getLinkStyle = (name, path) => {
    const isActive = location.pathname === path;

    if (isActive) {
      return { color: '#9000ad', fontWeight: '600' }; // highlight active link
    }
    if (hoveredLink === name) {
      return { color: '#9000ad' };
    }
    if (location.pathname !== '/') {
      return { color: 'black' }; // inner pages
    }
    return { color: scrolled ? 'black' : 'white' }; // homepage scroll state
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/kaika.png" alt="Kaika Logo" />
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                style={getLinkStyle('home', '/')}
                onMouseEnter={() => setHoveredLink('home')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-services"
                onClick={closeMenu}
                style={getLinkStyle('services', '/all-services')}
                onMouseEnter={() => setHoveredLink('services')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/service-provider"
                onClick={closeMenu}
                style={getLinkStyle('service-provider', '/service-provider')}
                onMouseEnter={() => setHoveredLink('service-provider')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Service Provider
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                onClick={closeMenu}
                style={getLinkStyle('about', '/about-us')}
                onMouseEnter={() => setHoveredLink('about')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <CartIcon />
          <Link to="/all-services">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
      </div>
      <ContactFormModal />
    </header>
  );
};

export default Header;
