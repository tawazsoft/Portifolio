import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubLink = () => {
  const githubProfile = "your_github_profile"; // Replace with your GitHub profile

  return (
   
    <>
      <a href={`https://github.com/${githubProfile}`} target="blank">
        <FaGithub />
      </a>
    </>
  );
};

export default GithubLink;
