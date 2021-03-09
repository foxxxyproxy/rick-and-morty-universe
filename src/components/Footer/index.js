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
  //background: linear-gradient(
    135deg,
    rgba(83, 111, 166, 1) 0%,
    rgba(83, 111, 166, 1) 20%,
    rgba(217, 82, 132, 1) 70%
  );
  }
`;

const Header = (props) => (
  <FooterWrap>
    <p>2021 The Rick and Morty Universe</p>
  </FooterWrap>
);

export default Header;
