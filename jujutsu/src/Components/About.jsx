import React from "react";
import "./style.css";
import niranjanImg from "./img/Niranjan_hd.jpg";

function About() {
  return (
    <section className="about-section">
      <div className="about-hero">
        <h1 className="reveal-text">
          About <span>Me</span>
        </h1>
        <div className="underline"></div>
      </div>

      <div className="creator-container">
        <div className="creator-image-wrapper">
          <img src={niranjanImg} alt="Niranjan" className="creator-img-large" />
        </div>
        <div className="creator-bio">
          <h2>
            Hi, I'm Niranjan <span> Web Developer</span>
          </h2>
          <p>
            I am a passionate web developer and anime enthusiast who created this project in January 2026 to transform the mystical universe of Jujutsu Kaisen into an interactive web experience.
          </p>
          <p>
            This website represents my commitment to crafting immersive designs and dynamic interfaces that reflect the powerful characters and thrilling energy of the series.
          </p>
          <div className="stat-grid">
            <div className="stat-card">
              <h3>2026</h3>
              <p>Launched</p>
            </div>
            <div className="stat-card">
              <h3>JUJUTSU</h3>
              <p>Passion</p>
            </div>
            <div className="stat-card">
              <h3>MODERN</h3>
              <p>Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
