// src/components/shared/StickyContact.js
import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const StickyContact = () => {
  return (
    <div className="sticky-contact">
      <a href="tel:+919910041914" className="sticky-icon">
        <FaPhone />
      </a>
      <a href="https://wa.me/919910041914" className="sticky-icon">
        <FaWhatsapp />
      </a>
      <a href="mailto:info@skbgreaternoida.in" className="sticky-icon">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default StickyContact;