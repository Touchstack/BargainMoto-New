import { Fragment } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import ListingsCard from "./ListingsCard";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";

const FeaturedListings = ({ vehicleData, loading }) => {
  console.log("VEHICLES:=>", vehicleData);
  return (
    <div className="bg-[#FBF8FC]">
      <div className="container mx-auto text-center lg:py-24 md:py-24 sm:py-12 py-12 md:px-4 px-11">
        <h3 className="font-Bold tracking-tight lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:py-8 md:py-8 py-4">
          Featured Listings
        </h3>

        <p className="font-Regular text-lg mx-auto mb-16 lg:w-4/6 md:w-5/6 w-6/6">
          Check out the top-notch cars available right now on BargainMoto. Check
          out some of the best deals we&apos;ve got!
        </p>

        {loading ? (
          <Spinner />
        ) : vehicleData.length >= 1 ? (
          <Fragment>
            <div className="grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-x-4 gap-y-12 text-left">
              {vehicleData.map((e, i) => {
                return (
                  <div key={i}>
                    <ListingsCard
                      loading={loading}
                      sellingPrice={e?.price}
                      uuid={e.uuid}
                      IMG={`https://bargain-moto.nyc3.digitaloceanspaces.com/${e?.cover_image}`}
                      title={
                        e?.year +
                        " " +
                        e?.color +
                        " " +
                        e?.brand +
                        " " +
                        e?.model
                      }
                      description={e?.sale_type}
                      iconText={e?.location}
                      saleType={e?.sale_type}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-12 lg:mb-12 md:mb-10 sm:mb-10 mb-10">
              <PrimaryButton
                buttonText={"View more listings"}
                onClick={() => (window.location.href = "/buyacar")}
              />
            </div>
          </Fragment>
        ) : (
          <p className="font-Bold text-gray-400 lg:text-2xl md:text-2xl sm:text-xl text-xl lg:py-12 md:py-8 py-4 bg-gray-100 rounded-lg">
            No Available Featured Listings
          </p>
        )}
      </div>
    </div>
  );
};

FeaturedListings.propTypes = {
  vehicleData: PropTypes.array,
  loading: PropTypes.bool,
};

FeaturedListings.defaultProps = {
  vehicleData: [],
  loading: "",
};

export default FeaturedListings;
