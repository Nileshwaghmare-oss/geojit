import { useState } from 'react';
import './Navbar.scss';
import Logo from '../../assets/geojit-logo.svg'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container ">
        <a href="/" className="navbar__logo">
          <span className="navbar__logo-text"><img src={Logo} alt="logo" /></span>
          {/* <span className="navbar__logo-sub">FINANCIAL SERVICES</span> */}
        </a>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="who-we-are">Who We Are</a></li>
          <li><a href="#services">What We Offer</a></li>
          <li><a href="#insights">Insights</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        <a href="#contact" className="navbar__cta">
          Schedule an Appointment
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
