// Footer.js

import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Your Professional Cleaning</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">deepcleaning</a></li>
            <li><a href="/about">roof cleaning</a></li>
            <li><a href="/services">floor cleaning</a></li>
            
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Professional Cleaning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
