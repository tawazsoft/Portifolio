import React from "react";
import { FaPhone } from "react-icons/fa";

const PhoneLink = () => {
  const phoneNumber = "263779586160"; // Replace with your phone number

  return (
   
    <>
      <a href={`tel:${phoneNumber}`} target="blank">
        <FaPhone />
      </a>
    </>
  );
};

export default PhoneLink;
