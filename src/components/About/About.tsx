import "./About.scss";
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Gcc from '@/assets/Gcc.png';
import stack from '@/assets/dubai.png';
import Property from '@/assets/Property.png';
import Dfsa from '@/assets/Dfsa.png';
import OpenArchitecture from '@/assets/Architecture.jpg';
import Institutionalgrade from '@/assets/Institutional-grade.png';
import square from '@/assets/IntersectSquare.png';
import FileMagnify from '@/assets/FileMagnifyingGlass.png';
import AOS from 'aos';
import 'aos/dist/aos.css';




const cards = [
  {
    icon: Gcc,
    imag: Property,
    title: "Indian Heritage & GCC Presence",
    desc: "This company responds quickly. Businesses that select our firm depend on capable counsel and prompt, relevant support.",
  },
  {
    icon: stack,
    imag: Dfsa,
    title: "Regulated by DFSA",
    desc: "This company responds quickly. Businesses that select our firm depend on capable counsel and prompt, relevant support.",
  },
  {
    icon: square,
    imag: OpenArchitecture,
    title: "Open-Architecture Wealth Model",
    desc: "Objective advice, free from conflict or commission bias.With personalized investment solutions, we empower our customers to invest to reach their individual needs.",
  },
  {
    icon: FileMagnify,
    imag: Institutionalgrade,
    title: "Institutional-grade Research",
    desc: "This company responds quickly. Businesses that select our firm depend on capable counsel and prompt, relevant support.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about__container">

        <div className="about__header-two">
          <a href="#" className="about__link" data-aos="fade-up"
            data-aos-delay="300">
            Why Geojit DIFC
          </a>

          <div className="about__header">
            <h2 className="about__heading" data-aos="fade-up"
              data-aos-delay="300">
              Built On Independence. Strengthened By Regulation.
              <br />
              Trusted For Generat<span>ions.</span>
            </h2>

            <a href="#" className="about__btn-two" data-aos="fade-up"
              data-aos-delay="300">
              About Us
            </a>
          </div>

          {/* DESKTOP GRID */}
          <div className="about__grid">
            {cards.map((card, i) => (
              <article className="about__card" key={i}>

                <div className="about__card-icon">
                  <img src={card.icon} alt={card.title} />
                </div>

                <h3 className="about__card-title">
                  {card.title}
                </h3>

                <p className="about__card-desc">
                  {card.desc}
                </p>

                {/* Hover Image */}
                <div className="about__card-hover-img">
                  <img src={card.imag} alt="" />
                </div>

              </article>
            ))}
          </div>

          {/* MOBILE SWIPER */}
          <div className="about__swiper">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.1}
            >
              {cards.map((card, i) => (
                <SwiperSlide key={i}>
                  <article className="about__card">

                    <div className="about__card-icon">
                      <img src={card.icon} alt={card.title} />
                    </div>

                    <h3 className="about__card-title">
                      {card.title}
                    </h3>

                    <p className="about__card-desc">
                      {card.desc}
                    </p>

                    <div className="about__card-hover-img">
                      <img src={card.imag} alt=""  className="about-img"/>
                    </div>

                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
