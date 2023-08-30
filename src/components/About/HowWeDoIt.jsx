import React, { useState } from "react";
import Driving from "../../assets/images/Driving.svg";
import Mercedes from "../../assets/images/Mercedes.Coupe.svg";
const HowWeDoIt = () => {
  return (
        <div className='items-center bg-[#FAFAFA] lg:p-32 md:p-24 p-12 text-center lg:text-xl md:text-xl sm:text-lg'>
         <div className='font-Regular text-xl max-w-[900px]'>
          <h3 className="font-Bold text-[#191919] lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center py-4 ml-6">
          About Us 
          </h3>
          <p className='font-Regular text-[#6D6D6D] lg:text-xl md:text-xl sm:text-lg text-xl m-1'>
      Bargain Moto is an online marketplace for private car sales directly between buyers and
      sellers. Our platform is aimed at making the entire process around buying and 
      selling your cars, faster and easier. </p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
      <div className="flex justify-center items-center img-fluid mx-8 lg:mt-0 md:mt-0 mt-12">   
      <img
            src={Mercedes}
            alt="Mercedes"
            style={{ height: "320px", width: "158px" }}   
            className="w-10 mt-5" 
          /> 
            <img
            src={Driving}
            alt="Driving"
            style={{ height: "296px", width: "234.025px"  }} 
            className="w-10 mt-5"
            /> 
          </div>
             <div className="mt-28">
            <p className="font-Regular text-[#6D6D6D] text-xl lg:text-xl md:text-lg sm:text-lg lg:text-left md:text-left text-center max-w-[3000px]">
            <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center py-4 text-[#191919]">
         How We Do It
          </h3>
        By verifying all buyer's and seller's identities, we prevent imposters from committing fraudulent sales. We also verify ownership history of cars and conduct
        pre-purchase inspections, using diagnostic scanners to detect if cars are suitabe for sales; giving our buyers total confidence with their purchase.
        <p className='mt-6'>
        The marketplace includes a feature for sellers to either set a fixed price or allow buyers to directly place bids on their cars. Personal contact information
        is only shared when a bid has been accepted, ensuring the convenience of a private shopping experience. Our integrated banking feature guarantees a secure
        flow of funds from buyer to seller through our escrow payment.
        </p>
        </p>
      </div>
      </div>
      </div>
     
  )
}
export default HowWeDoIt



