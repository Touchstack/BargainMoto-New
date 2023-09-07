import AboutHeroSection from "../../components/About/AboutHeroSection";
import AboutDescriptionSection from "../../components/About/AboutDescriptionSection";
import HowWeDoIt from "../../components/About/HowWeDoIt";
import WhyWeDoIt from "../../components/About/WhyWeDoIt";
import AboutMeetTheTeam from "../../components/About/AboutMeetTheTeam";
import AboutCallToAction from "../../components/About/AboutCallToAction";
import Footer from "../../components/Footer/Footer";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <AboutDescriptionSection />
      <HowWeDoIt />
      <WhyWeDoIt />
      <AboutMeetTheTeam />
      <AboutCallToAction />
      <Footer />
    </div>
  );
};
export default AboutPage;
