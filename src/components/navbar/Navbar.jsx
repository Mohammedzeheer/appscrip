import React, { useState } from 'react';
import './navbar.css'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">lOGO</h1>
      <div className="navbar-container">     
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Blog</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Affliate</a></li>
          <li><a href="#">Program</a></li>
        </ul>
      </div>

      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
         <button className='loginB'>Login</button>
         <button className='signupB'>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
