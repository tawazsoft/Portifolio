import React from 'react'
import styled from "styled-components";
import { useSpring, animated, } from "react-spring";

import Brand from "../Brand";
import BurgerMenu from "../BurgerMenu";
import CollapseMenu from "../CollapseMenu";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

 

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height:10vh;
  z-index: 100;
  font-size: 1.4rem;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  padding: 0rem 6rem;;
  justify-content: space-between;
  height: 5rem;
`;


const BurgerWrapper = styled.div`
  margin: auto 0;
  display:block !important;

 
`;