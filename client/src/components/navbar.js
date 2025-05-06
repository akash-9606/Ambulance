import React from 'react';
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="fixed-navbar-container">
      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <h2>Life+</h2>
          </div>

          {/* Navbar Links */}
          <div className="navbar-links">
            <span className="nav-link">Request Ambulance</span>
            <span className="nav-link">Track Ambulance</span>
            <button className="login-btn">Login / Register</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
