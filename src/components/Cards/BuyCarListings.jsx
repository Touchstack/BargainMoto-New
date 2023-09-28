import { Fragment } from "react";
import Spinner from "../Spinner/Spinner";
import ListingsCard from "./ListingsCard";
import PropTypes from "prop-types";

const BuyCarListings = ({ vehicleData, loading }) => {
  return (
    <div className="bg-[#FBF8FC]">
      <div className="container mx-auto text-center lg:py-24 md:py-24 sm:py-12 py-12 md:px-4 px-11">
        <h3 className="font-Bold tracking-tight text-left lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:py-8 md:py-8 py-4">
          Featured Listings
        </h3>

        {loading ? (
          <Spinner />
        ) : vehicleData.length >= 1 ? (
          <Fragment>
            <div className="grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-4 text-left">
              {vehicleData.map((e, i) => {
                return (
                  <div key={i}>
                    <ListingsCard
                      loading={loading}
                      sellingPrice={e?.selling_price}
                      uuid={e.uuid}
                      IMG={`https://bargain-moto.nyc3.digitaloceanspaces.com/${e?.featured_image}`}
                      title={e?.year + " " + e?.color + " " + e?.name}
                      description={e?.sale_type}
                      iconText={e?.location}
                      saleType={e?.sale_type}
                    />
                  </div>
                );
              })}
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

BuyCarListings.propTypes = {
  vehicleData: PropTypes.array,
  loading: PropTypes.bool,
};

BuyCarListings.defaultProps = {
  vehicleData: [],
  loading: "",
};

export default BuyCarListings;
