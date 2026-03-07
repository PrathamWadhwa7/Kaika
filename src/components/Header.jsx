import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import CartIcon from "./CartIcon";
import ContactFormModal from "./ContactFormModal";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const suggestions = [
  "Brand Strategy",
  "Packaging",
  "Manufacturing",
  "Fulfillment",
  "Legal",
  "Marketing",
  "Expansion",

  "Application Review",
  "Interview and Assessment",
  "Probationary Period",
  "Kaika Certification"
];

const filteredSuggestions = suggestions.filter((item) =>
  item.toLowerCase().includes(search.toLowerCase())
);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    const isDarkHeaderState = location.pathname === "/" && !scrolled;

    if (isActive) {
      return {
        color: isDarkHeaderState ? "#FDFDFD" : "#222222",
        fontWeight: "600",
      };
    }
    if (hoveredLink === name) {
      return { color: isDarkHeaderState ? "#FDFDFD" : "#222222" };
    }
    if (location.pathname !== "/") {
      return { color: "#222222" }; // inner pages
    }
    return { color: scrolled ? "#222222" : "#FDFDFD" }; // homepage scroll state
  };

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${!isHomePage ? "inner-page" : ""}`}
    >
      <div className="header-container">
         <div className="hamburger" onClick={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </div>
        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img
              src={scrolled ? "/kaikaV2.png" : "/kaika.png"}
              alt="Kaika Logo"
              className="logo-img"
            />
          </Link>
        </div>

        {/* SEARCH BAR */}
        <div className="header-search">
  <FaSearch className="search-icon" />

  <input
    type="text"
    placeholder="What are you looking for?"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  {search && (
    <div className="search-suggestions">
      {filteredSuggestions.map((item, index) => (
        <div
          key={index}
          className="suggestion-item"
          onClick={() => {
  const providerKeywords = ["Application", "Interview", "Probationary", "Certification"];

  const isProviderStep = providerKeywords.some(keyword => item.includes(keyword));

  navigate(isProviderStep ? "/service-provider" : `/all-services?search=${item}`);
}}
        >
          {item}
        </div>
      ))}
    </div>
  )}
</div>

        {/* MENU */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                style={getLinkStyle("home", "/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-services"
                onClick={closeMenu}
                style={getLinkStyle("services", "/all-services")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/service-provider"
                onClick={closeMenu}
                style={getLinkStyle("service-provider", "/service-provider")}
              >
                Service Provider
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                onClick={closeMenu}
                style={getLinkStyle("about", "/about-us")}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* CART */}
        <div className="header-right">
          <CartIcon
            scrolled={scrolled}
            isHomePage={location.pathname === "/"}
          />
        </div>
      </div>
      <ContactFormModal />
    </header>
  );
};

export default Header;
