import ContactGetInTouch from "../../components/Contact/ContactGetInTouch";
import ContactHeroSection from "../../components/Contact/ContactHeroSection";
import ContactMapView from "../../components/Contact/ContactMapView";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <ContactHeroSection />
      <ContactGetInTouch />

      <ContactMapView />
      <Footer />
    </div>
  );
};
export default ContactUs;
