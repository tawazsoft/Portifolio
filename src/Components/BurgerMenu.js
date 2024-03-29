import React from 'react';
import styled from "styled-components";

const Burgermenu = (props) => {
  return (
    <Wrapper onClick={props.handleNavbar}>
      <div className={ props.navbarState ? "open" : "" }>
        <span className='s1'>&nbsp;</span>
        {/* <span>&nbsp;</span> */}
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
}

export default Burgermenu;

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: pointer;
  display: block;

  .s1 {
    width: 60px;
  }

  & span {
    background: #ffffff;
    display: block;
    position: relative;
    width: 3.5rem;
    height: 0.4rem;
    margin-bottom: 1.3rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    opacity: 1;
    transform: rotate(45deg);
    top: -6px;
    width: 40px;
  }

  .open span:nth-child(3) {
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
    width: 40px;
  }
`;