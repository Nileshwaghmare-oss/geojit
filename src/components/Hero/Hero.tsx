import { useEffect } from 'react';
import heroImg from '@/assets/Hero.png';
import heromobileimg from '@/assets/Mobile-baner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.scss';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="hero">
      <div className="stats__container">

        <div className="hero__image">
          <img src={heroImg} alt="Hero Desktop" />
        </div>

        <div
          className="hero__mobile-bg"
          style={{ backgroundImage: `url(${heromobileimg})` }}
        />

        <div className="hero__content">

          <span
            className="hero__label"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            38+ YEARS OF INVESTMENT EXPERTISE
          </span>

          <h1
            className="hero__heading"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Global Wealth Management.<br />
            Trusted Indian Legacy.<br />
            Now in <span>DIFC.</span>
          </h1>

          <div
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <a href="#contact" className="navbar__cta-two">
              Schedule an Appointment
            </a>
          </div>

        </div>

        <div className="hero__bottom-strip">
          BUTTON LABEL
        </div>

      </div>
    </section>
  );
};

export default Hero;
