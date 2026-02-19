import ctaBg from '@/assets/youtube-video.mp4';
import mobileImg from '@/assets/youtube-video.mp4';
import './CTA.scss';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CTA = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="cta">
      <video
        className="cta__bg cta__bg--desktop"
        src={ctaBg}
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="cta__bg cta__bg--mobile"
        src={mobileImg}
        autoPlay
        loop
        muted
        playsInline
      />


      <div className="cta__content">
        <h2 className="cta__heading" data-aos="fade-up"
          data-aos-delay="300">
          Continue Your Legacy With Geo<span>jit</span>
        </h2>
        <a href="#contact" className="cta__btn" data-aos="fade-up"
          data-aos-delay="300">
          Schedule an Appointment
        </a>
      </div>
    </section>

  );
};

export default CTA;
