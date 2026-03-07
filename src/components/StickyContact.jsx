// src/components/shared/StickyContact.js
import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const StickyContact = () => {
  return (
    <div className="sticky-contact">
      <a href="tel:+918193912354" className="sticky-icon">
        <FaPhone  style={{ transform: "scaleX(-1)" }} />
      </a>
      <a href="https://wa.me/918193912354" className="sticky-icon">
        <FaWhatsapp />
      </a>
      <a href="mailto:build@gokaika.com" className="sticky-icon">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default StickyContact;