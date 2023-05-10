import React from "react";
import { FaFacebook } from "react-icons/fa";


const FacebookLink = () => {
  const facebookProfile = "https://www.facebook.com/tawanda.mashanda/";

  return (
    <>
  
    <a href={`https://www.facebook.com/${facebookProfile}`} target="blank">
      <FaFacebook />
    </a>

    </>
  );
};

export default FacebookLink;
