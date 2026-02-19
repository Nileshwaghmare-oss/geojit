import './StatsSection.scss';
import HandCoins from '../../../assets/HandCoins.svg';
import Medal from '../../../assets/Medal.svg';
import Users from '../../../assets/Users.svg';
import Bank from '../../../assets/Users.svg';

const stats = [
    { icon: HandCoins, prefix: "$", value: "14", suffix: "bn", label: "ASSETS MANAGED" },
    { icon: Medal, value: "38", suffix: "", label: "YEARS OF MARKET LEADERSHIP" },
    { icon: Users, value: "1.59", suffix: "mn", label: "CLIENTS SERVED" },
    { icon: Bank, value: "510", suffix: "", label: "BRANCHES ACROSS INDIA & GCC" },
];

const StatsSection = () => {
    return (
        <section className="stats__section">
            <div className="stats__container">
                <div className="stats__grid">

                    {/* Vertical Divider */}
                    <div className="stats__divider--vertical"></div>

                    {/* Horizontal Divider */}
                    <div className="stats__divider--horizontal"></div>

                    {stats.map((stat, i) => (
                        <div key={i} className="stat__item">
                            <img src={stat.icon} className="stat__icon" alt={stat.label} />

                            <p className="stat__value">
                                <span className='stat__prefix'>{stat.prefix ? stat.prefix : ''}</span>
                                {stat.value}
                                {stat.suffix && (
                                    <span className="stat__suffix">
                                        {stat.suffix}
                                    </span>
                                )}
                            </p>

                            <p className="stat__label">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
