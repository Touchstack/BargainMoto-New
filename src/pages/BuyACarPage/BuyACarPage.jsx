import BuyACarHero from "../../components/BuyACar/BuyACarHero";
import HomeCustomerVoices from "../../components/Hero/HomeCustomerVoices";
import HondaSearch from "../../components/BuyACar/HondaSearch";
import ResultsForHonda from "../../components/BuyACar/ResultsForHonda";
import Footer from "../../components/Footer/Footer";
import { Result } from "postcss";

const BuyACarPage = () => {
  return (
    <div>
      <BuyACarHero />
      <HomeCustomerVoices />
      <HondaSearch />
      <ResultsForHonda />
      <Footer />
    </div>
  );
};
export default BuyACarPage;
