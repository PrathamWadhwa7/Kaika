
import React, { useState } from "react";
import "./provider.css";
import Header from "./Header";
import Footer from "./Footer";
import AppProcess from "./ApplicationProcess";

// --- SVG Icon Components ---
const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13 16 9 12 2 19" />
    <polyline points="18 7 22 7 22 11" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const ProviderApplication = () => {
  const [response, setResponse] = useState("");

  return (
    <>
      <Header />
      <div className="provider-wrapper">
        <div className="provider-header">
          <h2>Join Our <span className="hcolor">Provider Network</span> 🤝 </h2>
          <p>
            Partner with Kaika to help founders build successful brands. Join our
            network of certified service providers.
          </p>
        </div>

        <div className="why-join">
          <div className="card"><div className="icon"><FileTextIcon /></div><h4>Quality Projects</h4><p>Work with vetted founders and established brands</p></div>
          <div className="card"><div className="icon"><CreditCardIcon /></div><h4>Guaranteed Payments</h4><p>Secure escrow system ensures timely payments</p></div>
          <div className="card"><div className="icon"><TrendingUpIcon /></div><h4>Support & Growth</h4><p>Training, certification, and business growth support</p></div>
        </div>

      <AppProcess/>
        {/* --- Application Form --- */}
        <form
          className="application-form"
          action="https://script.google.com/macros/s/AKfycbxzVmafnzVdkUWkd05Cr1JhRK92tHkog9ZJkOXnEC2COY_bGYSeQ5__PGE28ZD_MTCGKg/exec"
          method="POST"
          target="hidden_iframe"
          onSubmit={() => setTimeout(() => setResponse("✅ Thank you! Your application has been submitted."), 1000)}
        >
          <h3><span className="hcolor">Provider Application</span></h3>

          <div className="form-grid">
            <input type="text" name="name" placeholder="Full Name *" required />
            <input type="email" name="email" placeholder="Email Address *" required />
            <input type="text" name="company" placeholder="Company/Agency Name *" required />
            <input type="tel" name="phone" placeholder="Phone Number *" required />
          </div>

          <input type="text" name="service" placeholder="Service Expertise *" required />

          <div className="form-grid">
            <input type="number" name="experience" placeholder="Years of Experience *" required />
            <input type="text" name="gst" placeholder="GST Number (if applicable)" />
          </div>

          <textarea name="portfolio" placeholder="Portfolio Description *" required></textarea>

          {/* --- Portfolio & Website URLs --- */}
          <div className="form-grid">
            <input type="url" name="portfolioUrl" placeholder="Portfolio URL (Google Drive or similar) "  />
            <input type="url" name="websiteUrl" placeholder="Website URL (if live)" />
          </div>
          <p style={{ fontSize: "0.85rem", color: "#555" }}>
            Provide portfolio link (mandatory) and live website (optional).
          </p>

          <div className="checkboxes">
            <label><input type="checkbox" required /> I agree to the <a href="/">Supplier Agreement, Terms of Service, and Privacy Policy</a>.</label>
            <label><input type="checkbox" required /> I commit to maintaining Kaika’s quality standards and SLA requirements.</label>
          </div>

          <button type="submit" className="submit-btn"><CheckCircleIcon /> Submit Application</button>
        </form>

        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
        {response && <div className="form-response">{response}</div>}
      </div>
      <Footer />
    </>
  );
};

export default ProviderApplication;
