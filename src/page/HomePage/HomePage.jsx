import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomePageHero from "../../components/Hero/HomePageHero";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import AboutDescriptionSection from "../../components/About/AboutDescriptionSection";
import HomeFavoriteBrands from "../../components/Hero/HomeFavoriteBrands";
import ContactGetInTouch from "../../components/Contact/ContactGetInTouch";
import HomeCustomerVoices from "../../components/Hero/HomeCustomerVoices";
import ContactMapView from "../../components/Contact/ContactMapView";
import WhatSetBargainMotoApart from "../../components/Hero/WhatSetBargainMotoApart";
import AboutHeroSection from "../../components/About/AboutHeroSection";
import HowWeDoIt from "../../components/About/HowWeDoIt";
import ContactHeroSection from "../../components/Contact/ContactHeroSection";
import WhyWeDoIt from "../../components/About/WhyWeDoIt";
import AboutMeetTheTeam from "../../components/About/AboutMeetTheTeam";
import AboutCallToAction from "../../components/About/AboutCallToAction";
import HeroCallToAction from "../../components/Hero/HeroCallToAction";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HomePageHero />
      <div className=" bg-[#8C394C] mx-auto px-8 p-[5px] flex items-center pl-2 pr-20 justify-center p-19">
        <PrimaryButton buttonText={"Sell Your Car"} />
        <OutlinedButton buttonText={"Find your Dream Car"} />
      </div>
      <AboutDescriptionSection />
      <HomeFavoriteBrands />
      <ContactGetInTouch />
      <HomeCustomerVoices />
      <ContactMapView />
      <WhatSetBargainMotoApart />
      <AboutHeroSection />
      <HowWeDoIt />
      <ContactHeroSection />
      <WhyWeDoIt />
      <AboutMeetTheTeam />
      <AboutCallToAction />
      <HeroCallToAction />
      <Footer />
    </div>
  );
}
export default HomePage;
