import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramLink = () => {
  const instagramProfile = "your_instagram_profile"; // Replace with your Instagram profile

  return (
   
    <>
      <a href={`https://www.instagram.com/${instagramProfile}`} target="blank">
        <FaInstagram />
      </a>
    </>
  );
};

export default InstagramLink;
