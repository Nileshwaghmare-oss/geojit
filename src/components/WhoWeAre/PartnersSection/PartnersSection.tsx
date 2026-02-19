import './PartnersSection.scss'
import ADCB from '@/assets/adcb-logo.svg'
import EmirateNBDLogo from '@/assets/emirates-nbd.svg'
import ICICIBank from '@/assets/icici-bank-logo.svg'
import HDFCBank from '@/assets/hdfc-bank-logo.svg'
import AxisBank from '@/assets/axis-bank.svg'
import BNPParibas from '@/assets/bnp-paribas.svg'
import HSBCBank from '@/assets/hsbc.svg'

export default function PartnersSection() {
    return (
        <section className="partners">
            <div className="partners__container">

                <div className="partners__header">
                    <h2 className="partners__title">Our Partners</h2>
                </div>

                <div className="partners__box">

                    <div className="partners__row partners__row--top">
                        <div className="partners__logo">
                            <img src={ADCB} alt="ADCD" />
                        </div>
                        <div className="partners__logo">
                            <img src={EmirateNBDLogo} alt="Emirates NBD" />
                        </div>
                        <div className="partners__logo">
                            <img src={ICICIBank} alt="ICICI Bank" />
                        </div>
                        <div className="partners__logo">
                            <img src={HDFCBank} alt="HDFC Bank" />
                        </div>
                    </div>

                    <div className="partners__row partners__row--bottom">
                        <div className="partners__logo">
                            <img src={AxisBank} alt="Axis Bank" />
                        </div>
                        <div className="partners__logo">
                            <img src={BNPParibas} alt="BNP Paribas" />
                        </div>
                        <div className="partners__logo">
                            <img src={HSBCBank} alt="HSBC Bank" />
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}
