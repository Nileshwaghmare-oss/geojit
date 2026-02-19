import './CommonHero.scss';

const CommoncommonHero = ({
    label,
    title,
    highlightText,
    desktopImage,
    mobileImage,
}) => {
    return (
        <section className={`commonhero`}>
            <div className="commonhero__container">

                {/* Desktop Image */}
                {desktopImage && (
                    <div className="commonhero__image">
                        <img src={desktopImage} alt="commonHero Desktop" />
                    </div>
                )}

                {/* Mobile Background */}
                {mobileImage && (
                    <div
                        className="commonhero__mobile-bg"
                        style={{ backgroundImage: `url(${mobileImage})` }}
                    ></div>
                )}

                {/* Content */}
                <div className="commonhero__content">
                    {label && <span className="commonhero__label">{label}</span>}

                    <h1 className="commonhero__heading">
                        {title}{' '}
                        {highlightText && <span className='gradient-text'>{highlightText}</span>}
                    </h1>
                </div>


            </div>
        </section>
    );
};

export default CommoncommonHero;
