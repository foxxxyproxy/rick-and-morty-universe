import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  content-visibility: auto;
  position: relative;
  box-sizing: border-box;
  margin-top: auto;
  width: 100%;
  height: 6em;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity:0.6;
  overflow: hidden;
  }
`;

const Square = styled.div`
  height: 150px;
  width: 150px;
  border: 1px solid hsla(0, 0%, 100%, 0.18);
  opacity: 0.3;
  transform: rotate(-15deg);
  border-radius: 10px;
  background: radial-gradient(
    circle,
    hsla(0, 0%, 100%, 0.27) 0,
    hsla(0, 0%, 100%, 0.05) 100%
  );
  position: absolute;
  z-index: -1;
`;
const Square1 = styled(Square)`
  left: 10vw;
  top: 20em;
  height: 180px;
  width: 180px;
`;
const Square2 = styled(Square)`
  left: 7vw;
  top: 30em;
  height: 80px;
  width: 80px;
`;
const Square3 = styled(Square)`
  left: 90vw;
  bottom: 0px;
  height: 80px;
  width: 80px;
  transform: rotate(15deg);
`;
const Square4 = styled(Square)`
  left: 80vw;
  bottom: 0px;
  height: 180px;
  width: 180px;
  transform: rotate(15deg);
`;
const Square5 = styled(Square)`
  left: 85%;
  top: 7em;
  height: 70px;
  width: 70px;
  z-index: 1;
  opacity: 0.3;
  transform: rotate(15deg);
`;
const Square6 = styled(Square)`
  left: 90%;
  top: 12em;
  height: 180px;
  width: 180px;
  transform: rotate(15deg);
`;
const Header = (props) => (
  <>
    <FooterWrap>2021 The Rick and Morty Universe</FooterWrap>
    <Square1 />
    <Square2 />
    <Square3 />
    <Square4 />
    <Square5 />
    <Square6 />
  </>
);

export default Header;
