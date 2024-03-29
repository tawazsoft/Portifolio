import React from 'react'
import styled from "styled-components";

import logo from "./images/logo.png";

const Brand = () => {
  return (
    <Image src={logo} alt="Company Logo" />
  )
}

export default Brand

const Image = styled.img`
  height: 95%;
  margin: auto 0;
`;