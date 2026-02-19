import './Insights.scss';
import { useEffect } from 'react';
import stack from '@/assets/press-meadia.svg';
import stackcase from '@/assets/case-study.svg';
import stacknews from '@/assets/news.svg';
import stackvideos from '@/assets/videos.svg';
import stackcalendar from '@/assets/calendar-one.svg';
import youtube from '@/assets/you-tube-icon.svg';
import logoone from '@/assets/logo-one.png';
import logotwo from '@/assets/logo-two.png';
import logothree from '@/assets/logo-three.png';
import logofour from '@/assets/logo-four.png';
import logofive from '@/assets/logo-five.png';
import logosix from '@/assets/logo-six.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const insightItems = [
  { icon: stack, label: 'Press & Media' },
  { icon: stackcase, label: 'Case Studies' },
  { icon: stacknews, label: 'Insights' },
  { icon: youtube, label: 'Podcasts' },
  { icon: stackcalendar, label: 'Events' },
];

const Insights = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="insights" id="insights">
      <div className="services__container">
        <a href="#" className="about__link" data-aos="fade-up"
          data-aos-delay="300">
          Insights
        </a>

        <div className="insights__content">
          <h2 className="insights__heading" data-aos="fade-up"
            data-aos-delay="300">
            Stay Ahead with Geojit Insi<span>ghts</span>
          </h2>

          <div className="insights__cards">
            {insightItems.map((item, i) => (
              <a href="#" className="insights__card" key={i}>
                <div className="insights__card-inner">
                  <span className="insights__card-icon">
                    <img src={item.icon} alt={item.label} />
                  </span>

                  <div className="insights__card-text" >
                    <span className="insights__card-label">
                      Explore
                    </span>
                    <span className="insights__card-title">
                      {item.label}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="insights__partners">
        <a href="#" className="about__link" data-aos="fade-up"
          data-aos-delay="300">
          We Work With
        </a>



        <div className="insights__partners-marquee">
          <div className="insights__partners-track">
            <img src={logoone} alt="Thomson IN" className="insights__partner-logo" />
            <img src={logotwo} alt="Monolith™" className="insights__partner-logo" />
            <img src={logothree} alt="terra·tory™" className="insights__partner-logo" />
            <img src={logofour} alt="FRANCO™" className="insights__partner-logo" />
            <img src={logofive} alt="Newport Research" className="insights__partner-logo" />
            <img src={logosix} alt="Optional Partner" className="insights__partner-logo" />

            {/* Duplicate logos for seamless loop */}
            <img src={logoone} alt="Thomson IN" className="insights__partner-logo" />
            <img src={logotwo} alt="Monolith™" className="insights__partner-logo" />
            <img src={logothree} alt="terra·tory™" className="insights__partner-logo" />
            <img src={logofour} alt="FRANCO™" className="insights__partner-logo" />
            <img src={logofive} alt="Newport Research" className="insights__partner-logo" />
            <img src={logosix} alt="Optional Partner" className="insights__partner-logo" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Insights;
