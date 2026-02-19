import './Stats.scss';
import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const statsData = [
  { value: 14, prefix: '$', suffix: 'bn', caption: 'In Client Assets' },
  { value: 38, prefix: '', suffix: '', caption: 'Years Of Premier Leadership' },
  { value: 1.59, prefix: '', suffix: 'mn', caption: 'Clients & Counting' },
  { value: 510, prefix: '', suffix: '', caption: 'Branches across India and GCC' },
];


// ================= COUNT UP =================

const CountUp = ({ target, duration = 2000, decimals = 0, start }) => {
  const [count, setCount] = useState(0);
  const startTime = useRef(null);
  const frame = useRef(null);

  useEffect(() => {
    if (!start) return;

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;

      const progress = timestamp - startTime.current;
      const progressPercent = Math.min(progress / duration, 1);

      // Smooth ease-out
      const easeOut = 1 - Math.pow(1 - progressPercent, 3);
      const currentValue = target * easeOut;

      setCount(currentValue);

      if (progress < duration) {
        frame.current = requestAnimationFrame(animate);
      } else {
        setCount(target); // ensure exact final number
      }
    };

    frame.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame.current);
  }, [target, duration, start]);

  return decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count);
};


// ================= STATS SECTION =================

const Stats = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  // Trigger once only
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats__container">

        <p
          className="stats__title"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          A Legacy Of Trust, Refined Over De<span>cades.</span>
        </p>

        <div className="stats__grid">
          {statsData.map((item, i) => {
            const decimals = item.value.toString().includes('.') ? 2 : 0;

            return (
              <div className="stats__item" key={i}>
                <h2 className="stat">

                  {/* Prefix NOT animated */}
                  {item.prefix && (
                    <span className="stat__suffix">
                      {item.prefix}
                    </span>
                  )}

                  {/* ONLY number animated */}
                  <span className="stat__number">
                    <CountUp
                      target={item.value}
                      decimals={decimals}
                      start={startAnimation}
                    />
                  </span>

                  {/* Suffix NOT animated */}
                  {item.suffix && (
                    <span className="stat__suffix">
                      {item.suffix}
                    </span>
                  )}

                </h2>

                <p className="stats__caption">
                  {item.caption}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Stats;
