import React, { useState } from "react";
import "./App.css"; // Custom CSS file for styling

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      {/* Header Section */}
      <header className="header">
        <h1 className="logo">CrowdfundHub</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#insights">Crowdfunding Insights</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      {/* Campaigns Section */}
      <section className="campaigns">
        <h2 className="section-title">Ongoing Campaigns</h2>
        <div className="campaign-list">
          <div className="campaign">
            <img src="https://tse1.mm.bing.net/th?id=OIP.g3o7XvQLuM0LNdIOmZ9TUQHaD4&pid=Api&P=0&h=180" alt="Campaign 1" className="campaign-img"/>
            <h3>Build Schools for Underprivileged Children</h3>
            <p>Help provide quality education to kids in rural areas.</p>
          </div>
          <div className="campaign">
            <img src="https://ganeshnatarajan.in/wp-content/uploads/2018/06/nwdn_file_temp_1616146900462.jpg" alt="Campaign 2" className="campaign-img"/>
            <h3>Support Medical Aid for Rural Areas</h3>
            <p>Fund essential medical resources for underdeveloped regions.</p>
          </div>
          <div className="campaign">
            <img src="https://tse1.mm.bing.net/th?id=OIP._8huBXDgEmdXA_STavWHugHaE8&pid=Api&P=0&h=180" alt="Campaign 3" className="campaign-img"/>
            <h3>Clean Water Initiative</h3>
            <p>Ensure access to clean drinking water for struggling communities.</p>
          </div>
        </div>
      </section>

      {/* Crowdfunding Insights */}
      <section id="insights" className="insights">
        <h2 className="section-title">What is Crowdfunding?</h2>
        <p>Crowdfunding is a way to raise funds through small contributions from many individuals, typically via online platforms.</p>
        <p>It helps innovators, social causes, and startups gather financial support efficiently.</p>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>How do I start a campaign?</summary>
          <p>You can start by creating an account and submitting your project details for approval.</p>
        </details>
        <details className="faq-item">
          <summary>How do I donate?</summary>
          <p>Choose a campaign that resonates with you and follow the donation steps securely.</p>
        </details>
        <details className="faq-item">
          <summary>Is my donation secure?</summary>
          <p>Yes, all donations go through a verified payment gateway ensuring complete security.</p>
        </details>
      </section>

      {/* About Us & Contact Us */}
      <section id="about" className="about">
        <h2 className="section-title">About Us</h2>
        <p>At CrowdfundHub, we connect passionate individuals with innovative projects and social causes that need financial support.</p>
        <p>We believe in the power of the crowd to bring about real change in the world.</p>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">Contact Us</h2>
        <p>Email: support@crowdfundhub.com</p>
        <p>Phone: +1 234 567 890</p>
      </section>

      {/* Community Join Form */}
      <section className="community">
        <h2 className="section-title">Join Our Community</h2>
        <p>Stay updated with the latest crowdfunding opportunities and success stories.</p>
        <form className="community-form">
          <input type="text" placeholder="Your Name" required className="form-input"/>
          <input type="email" placeholder="Your Email" required className="form-input"/>
          <button type="submit" className="form-button">Join</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 CrowdfundHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
