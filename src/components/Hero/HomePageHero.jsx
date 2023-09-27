import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import OutlinedButton from "../Buttons/OutlinedButton";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const HomePageHero = ({ vehiclesData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vehiclesData.length);
    }, 1500); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [vehiclesData?.length]);

  const cardVariant = {
    active: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    inactive: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-[#8C394C] py-8 text-center">
      <header className="mx-auto">
        <span className="text-[#FFF] py-4 lg:text-5xl md:text-5xl sm:text-4xl text-4xl font-Bold break-normal mt-24 md:break-all max-w-7xl m-auto">
          Where smart car deals begin!
        </span>
      </header>
      <p className="max-w-[980px] mx-auto md:pl-25 p-4 py-2 mt-5 font-Regular text-[#EFEFEF] text-lg pt-2 lg:px-60 md:px-40 sm:px-28">
        Seamless car exchanges made simple - find your ride or find your buyer
        today.
      </p>
      <div className="mx-auto lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center text-center py-12">
        <PrimaryButton
          buttonText={"Sell Your Car"}
          className={"lg:mb-0 md:mb-0 sm:mb-0 mb-4"}
          onClick={() => navigate("/sellacar")}
        />
        <OutlinedButton
          buttonText={"Find your Dream Car"}
          className={"lg:ml-5 md:ml-5 sm:ml-0 ml-2"}
          onClick={() => navigate("/buyacar")}
        />
      </div>

      <motion.div className="flex justify-center items-center w-full lg:overflow-hidden md:overflow-hidden sm:overflow-auto overflow-auto">
        <AnimatePresence>
          {vehiclesData.map((e, i) => {
            return (
              <motion.img
                key={i}
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                //exit={{ x: "-300%" }}
                transition={{
                  easings: "linear",
                  //repeatType: "mirror",
                  //repeatDelay: 0.15,
                  duration: 15,
                  repeat: Infinity,
                }}
                className="h-[300px] w-[300px] rounded-3xl mr-5 hover:border hover:brightness-50 duration-500 border-orange-400 cursor-pointer"
                alt={e.uuid}
                src={`https://bargain-moto.nyc3.digitaloceanspaces.com/${e?.featured_image}`}
                variants={cardVariant}
                onClick={() =>
                  (window.location.href = `/car-details/${e?.uuid}`)
                }
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

HomePageHero.propTypes = {
  vehiclesData: PropTypes.array,
};

HomePageHero.defaultProps = {
  vehiclesData: [],
};
export default HomePageHero;
