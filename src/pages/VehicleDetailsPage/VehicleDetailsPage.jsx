import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getVehiclesById } from "../../services/VehicleService";
import { useLocation } from "react-router-dom";
import VehicleDetails from "../../components/VehicleDetails/VehicleDetails";
import Footer from "../../components/Footer/Footer";

const VehicleDetailsPage = () => {
  const [vehicle, setVehicle] = useState();
  const [loading, setLoading] = useState(true);
  const loaction = useLocation();
  const pathSegments = loaction?.pathname.split("/");
  const id = pathSegments[pathSegments.length - 1];

  useEffect(() => {
    async function fetchVehicleDetails() {
      try {
        setLoading(true);
        const vehiclesData = await getVehiclesById(id);
        setVehicle(vehiclesData);
        return setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchVehicleDetails();
  }, []);

  return (
    <div>
      <Navbar />
      <VehicleDetails vehicleData={vehicle} loading={loading} />
      <Footer />
    </div>
  );
};
export default VehicleDetailsPage;
