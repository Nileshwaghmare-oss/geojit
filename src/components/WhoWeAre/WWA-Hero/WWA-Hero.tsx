import './WWA-Hero.scss';

const Hero = ({
    label,
    title,
    highlightText,
    desktopImage,
    mobileImage,
}) => {
    return (
        <section className={`hero`}>
            <div className="hero__container">

                {/* Desktop Image */}
                {desktopImage && (
                    <div className="hero__image">
                        <img src={desktopImage} alt="Hero Desktop" />
                    </div>
                )}

                {/* Mobile Background */}
                {mobileImage && (
                    <div
                        className="hero__mobile-bg"
                        style={{ backgroundImage: `url(${mobileImage})` }}
                    ></div>
                )}

                {/* Content */}
                <div className="hero__content">
                    {label && <span className="hero__label">{label}</span>}

                    <h1 className="hero__heading">
                        {title}{' '}
                        {highlightText && <span className='gradient-text'>{highlightText}</span>}
                    </h1>
                </div>


            </div>
        </section>
    );
};

export default Hero;
