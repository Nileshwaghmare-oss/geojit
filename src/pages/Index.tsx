import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Stats from '@/components/Stats/Stats';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Story from '@/components/Story/Story';
import Insights from '@/components/Insights/Insights';
import Testimonials from '@/components/Testimonials/Testimonials';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Story />
        <Insights />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
