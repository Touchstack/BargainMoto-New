import { useEffect, useState } from "react";
import BuyACarHero from "../../components/BuyACar/BuyACarHero";
import HomeCustomerVoices from "../../components/Hero/HomeCustomerVoices";
import { getVehicles } from "../../services/VehicleService";
import CommonQuestions from "../../components/BuyACar/CommonQuestions";
import BuyCarListings from "../../components/Cards/BuyCarListings";

import Footer from "../../components/Footer/Footer";

const BuyACarPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchVehicles() {
      setLoading(true);
      const response = await getVehicles();
      const vehiclesData = response?.data;
      const cars = [1, 2, 3, 4, 5];
      if (vehiclesData.length >= 1) {
        vehiclesData.map((item, i) => (item["icon"] = cars[i]));
        setVehicles(vehiclesData);
      }
      return setLoading(false);
    }
    fetchVehicles();
  }, []);

  return (
    <div>
      <BuyACarHero />
      <BuyCarListings vehicleData={vehicles} loading={loading} />
      <HomeCustomerVoices />
      <section id="buyerfaqs">
        <CommonQuestions />
      </section>
      <Footer />
    </div>
  );
};
export default BuyACarPage;
