import HeroSection from "../../sections/HeroSection";
import LogoCarousel from "../../sections/LogoCarousel";
import Features from "../../sections/Features"
import PricingSection from "../../sections/PricingSection";
import TestimonialSection from "../../sections/TestimonialSection"
import CtaSection from "../../sections/CtaSection";
import Footer from "../../components/Footer";
const HomePages = () => {
  return <div className="text-2xl mt-20">
    <HeroSection />
    <LogoCarousel />
    <Features />
    <PricingSection />
    <TestimonialSection/>
    <CtaSection/>
    <Footer/>
  </div>;
};

export default HomePages;
