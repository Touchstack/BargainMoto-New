import React from "react";
 export default function OutlinedButton({ className, buttonText }) {
   return (
      <button
        type="button"
        className={`${className} text-[#FFDD85] font-SemiBold sm:text-2xl md:text-xl text-xs xs:mt-0 md:mt-0 mt-4 text-center focus:ring-2 focus:outline-none py-2.5 rounded-xl
        px-3 pt-2.5 pb-2.5 ml-6 items-center list-none inline-block border-2 border-[#FFDD85]` }  >
        {buttonText}
        </button>
   );
 }
