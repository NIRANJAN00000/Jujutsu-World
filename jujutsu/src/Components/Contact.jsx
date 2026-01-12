import React from "react";
import "./style.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="section-title">
        <h2>
          Connect <span>With Me</span>
        </h2>
        <div className="underline"></div>
      </div>
      <div className="social-links-container">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/niranjan-s-871352392"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card linkedin"
        >
          <div className="social-icon">In</div>
          <h3>LinkedIn</h3>
          <p>Connect professionally</p>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/its.niranjan.s?igsh=NXpwc3A5b2M2YnFv"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card instagram"
        >
          <div className="social-icon">Ig</div>
          <h3>Instagram</h3>
          <p>Follow my journey</p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919344123233"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card whatsapp"
        >
          <div className="social-icon">Wa</div>
          <h3>WhatsApp</h3>
          <p>Chat directly</p>
        </a>
      </div>
    </section>
  );
}

export default Contact;
