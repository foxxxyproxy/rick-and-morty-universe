import React from "react";
import styled from "styled-components";

const ButtonUI = styled.button`
  background: ${(p) => p.theme.primary};
  box-shadow: 0px 0px 0px 5px ${(p) => p.theme.shadowColor};
  color: white;
  border: 0;
  padding: 0.2em 1em;
  min-width: 1em;
  font-size: 1rem;
  max-height: 2em;
  border-radius: 1em;
  cursor: pointer;
  text-color: #fff;
  overflow: hidden;
  :hover {
    opacity: 0.8;
  }
`;

const Button = (props) => (
  <ButtonUI type={props.type} onClick={props.onClick}>
    {props.children}
  </ButtonUI>
);

export default Button;
