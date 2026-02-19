import Navbar from '@/components/Navbar/Navbar'
import heromobileimg from '@/assets/Mobile-baner.png';
import heroImg from '@/assets/Hero.png';
import CommonHero from '@/components/CommonHero/CommonHero';
import LegacySection from '@/components/WhoWeAre/LegacySection/LegacySection';
import StatsSection from '@/components/WhoWeAre/StatsSection/StatsSection';
import TimelineSection from '@/components/WhoWeAre/TimelineSection/TimelineSection';
import CJGeorge from '@/assets/cj-george.jpg'
import BoardSection from '@/components/WhoWeAre/BoardSection/BoardSection';
import PartnersSection from '@/components/WhoWeAre/PartnersSection/PartnersSection';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';


export default function WhoWeAre() {
    return (
        <>
            <Navbar />
            <main>
                <CommonHero title={"38 years of"} mobileImage={heromobileimg} desktopImage={heroImg} highlightText={"Excellence"} label={"Who We Are"} />
                <LegacySection />
                <StatsSection />
                <TimelineSection />
                <img src={CJGeorge} alt="C. J. George" className="cj-george-image" />
                <BoardSection />
                <PartnersSection />
                <CTA />
            </main>
            <Footer />
        </>
    )
}
