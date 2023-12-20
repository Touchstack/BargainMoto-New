import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomePageHero from "../../components/Hero/HomePageHero";
import HomeFavoriteBrands from "../../components/Hero/HomeFavoriteBrands";
import HomeTrustedBy from "../../components/Hero/HomeTrustedBy";
import WhatSetBargainMotoApart from "../../components/Hero/WhatSetBargainMotoApart";
import HeroCallToAction from "../../components/Hero/HeroCallToAction";
import HomeCustomerVoices from "../../components/Hero/HomeCustomerVoices";
import { HowItWorks } from "../../components/Home/HowItWorks";
import { getVehicles } from "../../services/VehicleService";
import FeaturedListings from "../../components/Cards/FeaturedListings";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  const [vehicles, setVehicles] = useState([]);
  const [animatedVehicles, setAnimatedVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to generate a unique identifier
  function generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  useEffect(() => {
    async function fetchVehicles() {
      setLoading(true);
      const response = await getVehicles();
      console.log(response);
      const vehiclesData = response?.data;
      const newArray = [];
      setVehicles(vehiclesData?.splice(0, 3));
      for (let i = 0; i < 100; i++) {
        // Replicate objects in a circular manner
        const objectItem = vehiclesData[i % vehiclesData.length];
        // Add a unique identifier to the object
        objectItem.animationId = generateUniqueId();
        newArray.push(objectItem);
      }
      setAnimatedVehicles(newArray);
      return setLoading(false);
    }
    fetchVehicles();
  }, []);

  return (
    <div>
      <Navbar />
      <HomePageHero vehiclesData={animatedVehicles} />
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
