import { useEffect, useState, useContext } from "react";
import SearchPageHero from "../../components/BuyACar/SearchPageHero";
import { AppContext } from "../../context/AppContext";
import { searchVehicles } from "../../services/VehicleService";
import SearchPageListings from "../../components/Cards/SearchPageListings";
import Footer from "../../components/Footer/Footer";

const SearchPage = () => {
  const [appContext] = useContext(AppContext);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(appContext);
  useEffect(() => {
    async function fetchVehicles() {
      try {
        setLoading(true);
        const response = await searchVehicles(appContext?.searchText);
        setVehicles(response?.data);
        return setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchVehicles();
  }, [appContext?.searchText]);

  return (
    <div>
      <SearchPageHero text={appContext?.searchText} />
      <SearchPageListings
        vehicleData={vehicles}
        loading={loading}
        pageHeader={`Showing ${vehicles?.length} results for "${appContext?.searchText}"`}
      />
      <Footer />
    </div>
  );
};
export default SearchPage;
