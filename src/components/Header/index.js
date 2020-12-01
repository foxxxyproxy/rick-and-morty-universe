import React from "react";
import LogoIcon from "./logoIcon";

import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 6em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(
    135deg,
    rgba(83, 111, 166, 1) 0%,
    rgba(83, 111, 166, 1) 20%,
    rgba(217, 82, 132, 1) 70%
  );
  box-shadow: 0px 3px 10px ${(p) => p.theme.shadowColor};
  padding: 0 2em;
  margin-bottom: 2em;
  @media (min-width: 576px) {
    margin-bottom: 4em;
  }
  h1 {
    color: ${(p) => p.theme.headerColor};
    text-shadow: -2px 0px ${(p) => p.theme.shadowColor};
  }
`;

const AppLogo = styled(Link)`
  cursor: pointer;
  margin-right: auto;
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
