import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* FOOTER GRID */}
        <div className="footer-grid">
          {/* Logo and Tagline */}
          <div className="footer-logo">
            <img src="/kaika.png" alt="Kaika Logo" />
            <p>End-to-end operations for Apparel & FMCG brands</p>
          </div>

          {/* Services */}
          <div>
            <h3>Services</h3>
            <ul>
              <li><a href="/all-services">Strategy</a></li>
              <li><a href="/all-services">Design</a></li>
              <li><a href="/all-services">Manufacturing</a></li>
              <li><a href="/all-services">Fulfillment</a></li>
              <li><a href="/all-services">Packaging</a></li>
              <li><a href="/all-services">Legal</a></li>
              <li><a href="/all-services">Marketing</a></li>
              <li><a href="/all-services">Expansion</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="/">Homes</a></li>
              <li><a href="/all-services">Services</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="mailto:prathamwadhwa7@gmail.com">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Certified Section */}
        <div className="certified-section-box">
          <div className="certified-text">
            <h3>
              <span>Become a </span>
              <span className="text-purple-bold">Kaika Certified Provider</span>
            </h3>
            <p>
              Join our network of trusted service providers and gain access to premium clients in the apparel and FMCG industries.
            </p>

            <ul className="certified-list">
              <li>
                <span className="tick">✓</span> Access to premium client projects
              </li>
              <li>
                <span className="tick">✓</span> Kaika Certification badge
              </li>
              <li>
                <span className="tick">✓</span> Escrow protected payments
              </li>
              <li>
                <span className="tick">✓</span> Dedicated support team
              </li>
            </ul>

            <button className="footer-btn">Get Certified</button>
          </div>

          <div className="certified-image">
            <img src="/footer-kaika.jpg" alt="Kaika Certified Provider" />
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>&copy; 2024 Kaika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
