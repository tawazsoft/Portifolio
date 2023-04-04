import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              About Me
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Contacts
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #de0033;
  position: fixed;

  left: 0px;
  right: 0px;
  z-index: 7;
  top:73px;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  display: flex;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;

    &:hover {
      color: #de0033;
      border-bottom: 1px solid #de0033;
    }
  }
`;