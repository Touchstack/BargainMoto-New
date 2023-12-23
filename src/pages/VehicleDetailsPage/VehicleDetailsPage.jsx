import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getVehiclesById } from "../../services/VehicleService";
import { useLocation } from "react-router-dom";
import VehicleDetails from "../../components/VehicleDetails/VehicleDetails";
import Footer from "../../components/Footer/Footer";

const VehicleDetailsPage = () => {
  const [vehicle, setVehicle] = useState();
  const [similarVehicles, setSimilarVehicles] = useState();
  const [loading, setLoading] = useState(true);
  const loaction = useLocation();
  const pathSegments = loaction?.pathname.split("/");
  const id = pathSegments[pathSegments.length - 1];


  useEffect(() => {
    async function fetchVehicleDetails() {
      try {
        setLoading(true);
        const vehiclesData = await getVehiclesById(id);
        setVehicle(vehiclesData[0]);
        setSimilarVehicles(vehiclesData[1]?.data);
        return setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchVehicleDetails();
  }, [id]);

  return (
    <div>
      <Navbar />
      <VehicleDetails
        vehicleData={vehicle}
        loading={loading}
        similarVehiclesData={similarVehicles}
      />
      <Footer />
    </div>
  );
};
export default VehicleDetailsPage;
