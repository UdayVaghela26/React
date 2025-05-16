import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';  // Import the logo properly

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#">HOME</a>
          <a href="#">OUR WORK</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
