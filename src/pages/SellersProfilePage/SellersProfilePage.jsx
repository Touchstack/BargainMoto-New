import Navbar from "../../components/Navbar/Navbar";
import SellersHero from "./components/SellersHero";
import VehicleListing from "./components/VehicleListing";
// import Reviews from "./components/Reviews";
import Footer from "../../components/Footer/Footer";

const SellersProfilePage = () => {
  return (
    <div>
      <Navbar />
      <SellersHero />
      <VehicleListing />
      {/* <Reviews /> */}
      <Footer />
    </div>
  );
};
export default SellersProfilePage;
