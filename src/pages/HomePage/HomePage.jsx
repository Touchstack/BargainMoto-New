import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomePageHero from "../../components/Hero/HomePageHero";
import HomeFavoriteBrands from "../../components/Hero/HomeFavoriteBrands";
import HomeTrustedBy from "../../components/Hero/HomeTrustedBy";
import WhatSetBargainMotoApart from "../../components/Hero/WhatSetBargainMotoApart";
import HeroCallToAction from "../../components/Hero/HeroCallToAction";
import HomeCustomerVoices from "../../components/Hero/HomeCustomerVoices";
import BenzOne from "../../assets/images/benz-1.png";
import BenzTwo from "../../assets/images/benz-2.png";
import BenzThree from "../../assets/images/benz-3.png";
import { HowItWorks } from "../../components/Home/HowItWorks";
import { getVehicles } from "../../services/VehicleService";
import FeaturedListings from "../../components/Cards/FeaturedListings";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchVehicles() {
      setLoading(true);
      const vehiclesData = await getVehicles();
      const cars = [BenzOne, BenzTwo, BenzThree];
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
      <Navbar />
      <HomePageHero />
      <HomeTrustedBy />
      <WhatSetBargainMotoApart />
      <HowItWorks />
      <FeaturedListings vehicleData={vehicles} loading={loading} />
      <HomeFavoriteBrands />
      <HomeCustomerVoices />
      <HeroCallToAction />
      <Footer />
    </div>
  );
}
export default HomePage;
