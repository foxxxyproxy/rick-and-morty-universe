import React from "react";

import styled from "styled-components";

const FooterWrap = styled.footer`
  box-sizing: border-box;
  margin-top: auto;
  width: 100%;
  height: 6em;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity:0.6;
  }
`;

const Header = (props) => (
  <FooterWrap>2021 The Rick and Morty Universe</FooterWrap>
);

export default Header;
