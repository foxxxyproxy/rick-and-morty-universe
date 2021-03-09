import React from "react";
import LogoIcon from "../../assets/logoIcon";

import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 12em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(217, 82, 132, 0.25);
  box-shadow: ${(p) => p.theme.boxShadow};
  backdrop-filter: ${(p) => p.theme.backdropFilter};

  clip-path: polygon(0px 0px, 100% 0px, 100% 71%, 0px 100%);

  padding: 0 2em;
  margin-bottom: 1em;
  @media (min-width: 576px) {
    margin-bottom: 2em;
  }
  h1 {
    color: ${(p) => p.theme.headerColor};
    text-shadow: -2px 0px ${(p) => p.theme.shadowColor};
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }
`;

const AppLogo = styled(Link)`
  cursor: pointer;
  //margin-right: auto;
  padding-right: 2em;

  svg {
    fill: ${(p) => p.theme.headerColor};
  }
`;

const Header = (props) => {
  return (
    <>
      <HeaderWrap>
        <AppLogo to="/" aria-label="logo">
          <LogoIcon />
        </AppLogo>
        <h1>The Rick and Morty Universe</h1>
      </HeaderWrap>
    </>
  );
};

export default Header;
