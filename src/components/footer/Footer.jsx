import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-content">
        <h1>lOGO</h1>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About US</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">login</a></li>
            <li><a href="#">Signup</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Programs</h3>
          <ul>
            <li><a href="#">Affliate Program</a></li>
            <li><a href="#">Ambassador Program</a></li>
            <li><a href="#">Partnership Program</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Policy</h3>
          <ul>
            <li><a href="#">Legal</a></li>
            <li><a href="#">DMCA</a></li>
            <li><a href="#">USC 2257</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="right-content">
        <h3>Follow Us</h3>
        <img src="images/symbol.png" alt="symbol" className='symbol' />
      </div>

    </footer>
  );
};


export default Footer;
