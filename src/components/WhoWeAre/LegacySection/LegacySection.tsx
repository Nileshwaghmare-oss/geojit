import './LegacySection.scss'
import BarjeelImg from '@/assets/Barjeel.png';
import GeojitImg from '@/assets/geojit.png';

export default function LegacySection() {
    return (
        <section className='legacy'>
            <div className='legacy-content'>
                <h2>Anchored by <span className='gradient-text'>Legacy</span></h2>
                <p>Geojit Private Wealth (DIFC) Limited is an independent wealth management firm headquartered in the Dubai International Financial Centre. Anchored by Geojit Financial Services Limited and Barjeel Geojit Financial Services LLC, we bring decades of experience across India and the Middle East to advise families and individuals on long-term wealth strategies. Our philosophy rests on independence, transparency and disciplined stewardship of capital.</p>
            </div>

            <div className='legacy-images-container'>
                <div className='legacy-image-wrapper'>
                    <img src={BarjeelImg} alt="Barjeel" className='legacy-image' />
                </div>
                <div className="gradient-line" />
                <div className='legacy-image-wrapper'>
                    <img src={GeojitImg} alt="Geojit" className='legacy-image' />
                </div>
            </div>
        </section>
    )
}
