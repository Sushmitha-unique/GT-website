import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://media.licdn.com/dms/image/C4D16AQFHXSba8Nf89g/profile-displaybackgroundimage-shrink_200_800/0/1655103837481?e=2147483647&v=beta&t=6Jo4c8zN93e6xPmmkdIA6o8spzNTBoRCWjOWYe_tqi8" alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link  to="/">Home</Link>
        <div className="dropdown">
          <a href="#courses" className="dropbtn">Courses</a>
          <div className="dropdown-content">
            <a href="/Webpage">Web Development</a>
            <a href="/Pythonpage">Python</a>
            <a href="/Javapage">Java</a>
          </div>
        </div>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        {localStorage.getItem('auth-token')?<Link to="/profile" >Profile</Link>: <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
