import React from "react";
import LogoIcon from "../../assets/logoIcon";

import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 6em;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 2em;
  margin-bottom: 2em;
  @media (min-width: 576px) {
    margin-bottom: 4em;
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

const Header = (props) => (
  <HeaderWrap>
    <AppLogo to="/" aria-label="logo">
      <LogoIcon />
    </AppLogo>
    <h1>The Rick and Morty Universe</h1>
  </HeaderWrap>
);

export default Header;
