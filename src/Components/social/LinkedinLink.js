import React from "react";
import { FaLinkedin } from "react-icons/fa";

const LinkedinLink = () => {
  const linkedinProfile = "your_linkedin_profile"; // Replace with your LinkedIn profile

  return (
   

    <>
      <a href={`https://www.linkedin.com/in/${linkedinProfile}`} target="blank">
        <FaLinkedin />
      </a>
    </>
  );
};

export default LinkedinLink;
