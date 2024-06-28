import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="footercontainer">
        <div className="footer-content">
          <div className="footer-section">
            <h6 className="footer-heading">Our Company</h6>
            <ul className="footer-link">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/Privacy Policy">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h6 className="footer-heading">Courses</h6>
            <ul className="footer-link">
              <li><Link to="#">Web development</Link></li>
              <li><Link to="#">Java FullStack</Link></li>
              <li><Link to="#">Python FullStack </Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h6 className="footer-heading">Help</h6>
            <ul className="footer-link">
              <li><Link to="/login">Sign Up &amp;Login</Link></li>
              <li><Link to="/Privacy Policy">Privacy Policy</Link></li>
              <li><Link to="/return">Refund & Cancellation</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h6 className="footer-heading">Contact Us</h6>
            <p className="contact-info">Contact us if you need help with anything</p>
            <p className="contact-info">+01 123-456-7890</p>
            <div className="footer-social">
             <a href="#" className="footer-social-icon facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="footer-social-icon twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="footer-social-icon google"><i className="fab fa-google"></i></a> 
            </div>
          </div>
        </div>
        <p className="footer-alt"> &copy; 2024 Gangaaram Technologies Pvt Ltd - All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;