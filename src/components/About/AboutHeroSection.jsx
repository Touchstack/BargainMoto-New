import Navbar from "../Navbar/Navbar";

const AboutHeroSection = () => {
  return (
    <main className="bg-[#8C394C]">
      <Navbar />
      <div className="container mx-auto px-8 lg:py-24 md:py-18 sm:py-16 py-16">
        <div className="lg:w-8/12 md:w-10/12 sm:w-11/12 w-11/12 font-Bold lg:text-5xl md:text-4xl sm:text-4xl text-4xl text-[#FFFFFF]">
          Get to know about us & meet our amazing team
        </div>
      </div>
    </main>
  );
};

export default AboutHeroSection;
