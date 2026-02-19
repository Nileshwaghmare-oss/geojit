import { useState, useCallback } from "react";
import "./TimelineSection.scss";

const timelineData = [
  {
    year: "1987",
    title: "Foundation In Coch",
    titleBold: "in",
    description:
      "M/s C. J. George and Co. is established in Cochin, laying the foundation for what would become Geojit.",
  },
  {
    year: "1993",
    title: "Stockbroking Beg",
    titleBold: "ins",
    description:
      "Geojit Securities Ltd is incorporated as a public limited company and becomes a member of the Cochin Stock Exchange.",
  },
  {
    year: "2005",
    title: "Global Expans",
    titleBold: "ion",
    description:
      "BNP Paribas acquires a significant stake, marking Geojit's entry into the global financial landscape.",
  },
];

interface SlideDigitProps {
  digit: string;
  direction: "up" | "down";
  delay: number;
}

const SlideDigit = ({ digit, direction, delay }: SlideDigitProps) => {
  const [current, setCurrent] = useState(digit);
  const [prev, setPrev] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);

  if (digit !== current && !animating) {
    setPrev(current);
    setCurrent(digit);
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      setPrev(null);
    }, 500 + delay);
  }

  return (
    <span className="slide-digit-wrapper" style={{ animationDelay: `${delay}ms` }}>
      {prev !== null && animating && (
        <span
          className={`slide-digit slide-out-${direction}`}
          style={{ animationDelay: `${delay}ms` }}
        >
          {prev}
        </span>
      )}
      <span
        className={animating ? `slide-digit slide-in-${direction}` : "slide-digit"}
        style={{ animationDelay: `${delay}ms` }}
      >
        {current}
      </span>
    </span>
  );
};

const TimelineSection = () => {
  const [index, setIndex] = useState(0);
  const [contentAnim, setContentAnim] = useState("visible");
  const [direction, setDirection] = useState<"up" | "down">("up");

  const transition = useCallback((newIndex: number, dir: "up" | "down") => {
    setDirection(dir);
    setContentAnim("entering");
    setTimeout(() => {
      setIndex(newIndex);
      requestAnimationFrame(() => setContentAnim("visible"));
    }, 350);
  }, []);

  const prev = () =>
    transition(index === 0 ? timelineData.length - 1 : index - 1, "down");
  const next = () =>
    transition(index === timelineData.length - 1 ? 0 : index + 1, "up");

  const item = timelineData[index];
  const digits = item.year.split("");

  return (
    <section className="timeline-section">
      <div className="timeline-year">
        {digits.map((d, i) => (
          <SlideDigit key={i} digit={d} direction={direction} delay={i * 60} />
        ))}
      </div>
      <div className={`timeline-content ${contentAnim}`}>
        <h2 className="timeline-title">
          {item.title}<strong>{item.titleBold}</strong>
        </h2>
        <p className="timeline-description">{item.description}</p>
        <div className="timeline-nav">
          <button className="nav-btn" onClick={prev} aria-label="Previous">
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className="nav-btn" onClick={next} aria-label="Next">
            <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
