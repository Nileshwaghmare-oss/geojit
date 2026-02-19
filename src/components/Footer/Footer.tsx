import React, { useEffect, useState } from "react";
import './Footer.scss';
import facebook from '@/assets/facebook.svg';
import youtube from '@/assets/youtube.svg';
import insta from '@/assets/insta.svg';
import linkdin from '@/assets/linkdin.svg';

const Footer = () => {

  const [showTop, setShowTop] = useState(false);

  // Show button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bs-footer">

      <div className="footer-top-line"></div>

      <div className="services__container footer-flex">

        {/* LEFT */}
        <div className="left-box">
          <img src="/footer-logo.png" alt="logo" />

          <p className="mar-top">
            123 Advocacy Lane,<br />
            Suite 456,<br />
            Washington, D.C.<br />
            20001 United States
          </p>

          <p className="mar-top">(123) 456 - 7890</p>
          <p className="mar-top-16">info@example.com</p>

          {showTop && (
            <button 
              className="footer-top-btn"
              onClick={scrollToTop}
            >
              ↑
            </button>
          )}
        </div>

        {/* CENTER */}
        <div>
          <div className="footer-links-flex">

            <div className="footer-col">
              <h4>HOME</h4>
              <ul>
                <li>Who We Are</li>
                <li>What We Offer</li>
                <li>Career</li>
                <li>Media & Events</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>SERVICES</h4>
              <ul>
                <li>Investment product</li>
                <li>Investment services</li>
                <li>Financing</li>
                <li>Wealth Planning</li>
              </ul>

              <h4 className="mar-top-36">LEGAL</h4>
              <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom-border"></div>

          {/* Social */}
          <div className="footer-social mar-top-36">
            <a href="#">
              <img src={facebook} alt="Facebook" />
              <span>Facebook</span>
            </a>

            <a href="#">
              <img src={youtube} alt="Youtube" />
              <span>Youtube</span>
            </a>

            <a href="#">
              <img src={insta} alt="Instagram" />
              <span>Instagram</span>
            </a>

            <a href="#">
              <img src={linkdin} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Geojit Private Wealth. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
