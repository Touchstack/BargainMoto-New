import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AboutCallToAction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="bg-[#8C394C] text-center py-20">
      <div className="m-12 font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl max-w-[9000px] text-[#FFFFFF]">
        Have any question for us?
      </div>
      <button
        className="bg-[#F3B757] font-SemiBold text-center text-[#5C2E14] px-7 h-[60px] p-3 rounded-xl text-xl"
        buttonText={"Contact Us"}
        onClick={() => navigate("/contactus")}
      >
        Contact Us
      </button>
    </div>
  );
};
export default AboutCallToAction;
