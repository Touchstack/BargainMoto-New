import SellACarHeroSection from "../../components/SellACar/SellACarHeroSection";
import HomeCustomerVoices from "../../components/Hero/HomeCustomerVoices";
import SellACarHowItWorks from "../../components/SellACar/SellACarHowItWorks";
import CommonQuestions from "../../components/SellACar/CommonQuestions";
import Footer from "../../components/Footer/Footer";

const SellACarPage = () => {
  return (
    <div>
      <SellACarHeroSection />
      <HomeCustomerVoices />
      <SellACarHowItWorks />
      <CommonQuestions />
      <Footer />
    </div>
  );
};

export default SellACarPage;
