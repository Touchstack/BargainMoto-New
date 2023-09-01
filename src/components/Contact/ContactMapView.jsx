import React, { useState } from "react";
import Mapview from "../../assets/images/Map.svg"

const ContactMapView = () => {
  return (
    <div>
       <img
          src={Mapview}
          alt="Map"
          style={{ height: "auto"}}  
          className="mx-auto"/>
    </div>
  )
}

export default ContactMapView
