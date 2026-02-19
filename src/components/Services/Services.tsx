import {useEffect, useState } from 'react';
import './Services.scss';
import stack from '@/assets/Stack.svg';
import arrow from '@/assets/produt.svg';
import star from '@/assets/Lock.svg';
import bank from '@/assets/PiggyBank.svg';
import check from '@/assets/ShieldCheck.svg';
import banktwo from '@/assets/Banktwo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const tabs = [
  {
    label: "Investment Products",
    items: [
      { text: "Stocks, Fixed Income, Securities", icon: stack },
      { text: "Structured Products & Derivatives", icon: arrow },
      { text: "Private Equity Investments", icon: star },
      { text: "Fixed Deposits", icon: bank },
      { text: "Long Term Insurance (Jumbo Insurance)", icon: check },
      { text: "Arranging/marketing/referral of Sukuk issued/arranged by the 3rd Party Financial Institutions)", icon: banktwo },
    ],
  },

  {
    label: "Investment Services",
    items: [
      { text: "Discretionary Portfolio Management", icon: stack },
      { text: "Non-Discretionary Portfolio Management", icon: arrow },
      
    ],
  },

  {
    label: "Financing",
    items: [
      { text: "Portfolio Leverage", icon: stack },
      { text: "Real Estate Financing", icon: arrow },
      { text: "Insurance Premium Financing", icon: star },
     
    ],
  },

  {
    label: "Wealth Planning",
    items: [
      { text: "Life & General Insurance", icon: stack },
      { text: "Estate Planning", icon: arrow },
      { text: "Trust Services", icon: star },
      
    ],
  },




];

const Services = () => {
  const [active, setActive] = useState(0);
   useEffect(() => {
          AOS.init({
            duration: 1000,
            once: true,
          });
        }, []);

  return (
    <section className="services" id="services">
      <div className="services__container">
        <a href="#" className="services__offer-btn"data-aos="fade-up"
            data-aos-delay="300">
          what we offer
        </a>
        <h2 className="services__heading" data-aos="fade-up"
            data-aos-delay="300">
          Crafted To Preserve Wealth, Secure Privacy And Ensure Contin <span>uity.</span>
        </h2>

        <div className="services__tabs">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`services__tab-btn ${i === active ? 'services__tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ul className="services__list">
          {tabs[active].items.map((item, i) => (
            <li key={i} className="services__list-item" data-aos="fade-up"
            data-aos-delay="300">
              <img src={item.icon} alt="" className="services__icon" data-aos="fade-up"
            data-aos-delay="300" />
              <span data-aos="fade-up"
            data-aos-delay="300">{item.text}</span>
            </li>
          ))}
        </ul>




        <a href="#" className="services__learn-more" data-aos="fade-up"
            data-aos-delay="300">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Services;
