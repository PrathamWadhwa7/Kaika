// import React, { useState, useEffect } from 'react';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header className={`header ${scrolled ? 'scrolled' : ''}`}>
//       <div className="header-container">
//         <div className="logo">
//           <img src="/kaika.png" alt="Kaika Logo" />
//         </div>
//         <div className="hamburger" onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <nav className={`nav ${menuOpen ? 'open' : ''}`}>
//           <ul>
//             <li><a href="" onClick={closeMenu}>Home</a></li>
//             <li><a href="services" onClick={closeMenu}>Services</a></li>
//             <li><a href="service-provider" onClick={closeMenu}>Service Provider</a></li>
//             <li><a href="#about" onClick={closeMenu}>About us</a></li>
//           </ul>
//         </nav>
//         <div className="cta">
//           <button className="get-started-btn">Get Started</button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

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

  // dynamic style builder
  const getLinkStyle = (name) => {
    if (hoveredLink === name) {
      return { color: '#9000ad' }; // hover color
    }
    if (window.location.pathname !== '/') {
      return { color: 'black' }; // inner pages
    }
    return { color: scrolled ? 'black' : 'white' }; // homepage scroll
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src="/kaika.png" alt="Kaika Logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a
                href="/"
                onClick={closeMenu}
                style={getLinkStyle('home')}
                onMouseEnter={() => setHoveredLink('home')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                onClick={closeMenu}
                style={getLinkStyle('services')}
                onMouseEnter={() => setHoveredLink('services')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/service-provider"
                onClick={closeMenu}
                style={getLinkStyle('service-provider')}
                onMouseEnter={() => setHoveredLink('service-provider')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Service Provider
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                style={getLinkStyle('about')}
                onMouseEnter={() => setHoveredLink('about')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                About us
              </a>
            </li>
          </ul>
        </nav>
        <div className="cta">
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
