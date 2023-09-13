import React, { useState } from "react";

const ContactMapView = () => {
  return (
    <div className="container mx-auto">
      <div
        className="rounded-lg"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          paddingTop: "56.25%",
        }}
      >
        <iframe
          title="Bargain Motogh Mapview"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15883.69008856965!2d-0.155683!3d5.5784718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf3f9e66b506c8f68!2sBargain%20Motogh!5e0!3m2!1sen!2sgh!4v1661864666754!5m2!1sen!2sgh"
          width="600"
          height="450"
          style={{
            border: "0",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
          }}
          className=""
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMapView;
