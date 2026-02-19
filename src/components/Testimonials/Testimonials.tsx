import './Testimonials.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from 'react';
import "swiper/css";
import stack from '@/assets/testimonil.svg';
import testione from '@/assets/Testimonial-one.svg';
import testitwo from '@/assets/Testimonial-two.svg';
import testithree from '@/assets/Testimonial-three.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cards = [
  {
    icon: stack,
    desc: "Geojit made investing easy and transparent. Their personalized guidance and digital tools gave me full control of my portfolio.",
    name: "Johnathan Adams",
    role: "CEO - FRANCO",
    profileImg: testione,
  },
  {
    icon: stack,
    desc: "Geojit made investing easy and transparent. Their personalized guidance and digital tools gave me full control of my portfolio.",
    name: "Julek Cesar",
    role: "CEO — TERRA-TORY™",
    profileImg: testitwo,
  },
  {
    icon: stack,
    desc: "Geojit made investing easy and transparent. Their personalized guidance and digital tools gave me full control of my portfolio.",
    name: "Jessica Mercedes",
    role: "CEO — SUPERIOR",
    profileImg: testithree,
  },
  {
    icon: stack,
    desc: "Geojit made investing easy and transparent. Their personalized guidance and digital tools gave me full control of my portfolio.",
    name: "Johnathan Adams",
    role: "CEO - FRANCO",
    profileImg: testithree,
  },
  {
    icon: stack,
    desc: "Geojit made investing easy and transparent. Their personalized guidance and digital tools gave me full control of my portfolio.",
    name: "Johnathan Adams",
    role: "CEO - FRANCO",
    profileImg: testithree,
  },
  {
    icon: stack,
    desc: "Geojit made investing easy and transparent. Their personalized guidance and digital tools gave me full control of my portfolio.",
    name: "Johnathan Adams",
    role: "CEO - FRANCO",
    profileImg: testithree,
  },
];

const Testimonials = () => {
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
          <a
            href="#"
            className="about__link"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Testimonials
          </a>

          <div className="about__header">
            <h2
              className="about__testimonial-head"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Voices of trust. Stories of leg<span>acy.</span>
            </h2>
          </div>

          {/* SINGLE SWIPER FOR ALL DEVICES */}
          <div className="">
            <Swiper
              spaceBetween={20}
              breakpoints={{
                320: {
                  slidesPerView: 1.1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
                1440: {
                  slidesPerView: 4,
                },
              }}
            >
              {cards.map((card, i) => (
                <SwiperSlide key={i}>
                  <article className="about__card-about-testimonil">

                    <div className="about__card-testi">
                      <img src={card.icon} alt={card.name} />
                    </div>

                    <p className="about__testcard-desc">
                      {card.desc}
                    </p>

                    <div className="about__card-profile">
                      <img
                        src={card.profileImg}
                        alt={card.name}
                        className="about__profile-img"
                      />
                      <div className="about__profile-info">
                        <h4>{card.name}</h4>
                        <span>{card.role}</span>
                      </div>
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

export default Testimonials;
