import React from "react";
import styled from "styled-components";

const ButtonUI = styled.button`
  background: ${(p) => p.theme.secondary};

  color: white;
  border: 0;
  padding: 0.6em 1em;
  min-width: 2em;
  font-size: 1rem;
  max-height: 3em;
  border-radius: 0.8em;
  cursor: pointer;
  text-color: #fff;
  overflow: hidden;
  :hover {
    opacity: 0.8;
  }
  align-self: center;
`;

const Button = (props) => (
  <ButtonUI type={props.type} onClick={props.onClick}>
    {props.children}
  </ButtonUI>
);

export default Button;
