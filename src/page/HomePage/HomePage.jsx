import Navbar from "../../components/Navbar/Navbar";
import HomePageHero from "../../components/Hero/HomePageHero";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import HomeFavoriteBrands from "../../components/Hero/HomeFavoriteBrands";
import WhatSetBargainMotoApart from "../../components/Hero/WhatSetBargainMotoApart";
import HeroCallToAction from "../../components/Hero/HeroCallToAction";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HomePageHero />
      <div className="bg-[#8C394C] mx-auto px-8 lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center text-center pb-12">
        <PrimaryButton
          buttonText={"Sell Your Car"}
          className={"lg:mb-0 md:mb-0 sm:mb-0 mb-4"}
        />
        <OutlinedButton
          buttonText={"Find your Dream Car"}
          className={"lg:ml-5 md:ml-5 sm:ml-0 ml-4"}
        />
      </div>
      <WhatSetBargainMotoApart />
      {/*<AboutDescriptionSection />*/}
      <HomeFavoriteBrands />
      {/*<ContactGetInTouch />*/}
      {/*<HomeCustomerVoices />*/}
      {/*<ContactMapView />*/}

      {/*<AboutHeroSection />*/}
      {/*<HowWeDoIt />*/}
      {/*<ContactHeroSection />*/}
      {/*<WhyWeDoIt />*/}
      {/*<AboutMeetTheTeam />*/}
      {/*<AboutCallToAction />*/}
      <HeroCallToAction />
      <Footer />
    </div>
  );
}
export default HomePage;
