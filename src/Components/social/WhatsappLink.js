import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappLink = () => {
  const phoneNumber = "1234567890"; // Replace with your phone number
  const message = "Hello, I want to chat with you!"; // Replace with your message

  return (
   
    <>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="blank"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default WhatsappLink;
