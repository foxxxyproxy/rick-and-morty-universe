import React from "react";
import styled from "styled-components";

const ButtonUI = styled.button`
  background: ${(p) => p.theme.secondary};
  position: static;
  color: white;
  border: 0;
  padding: 0.6em 1em;
  min-width: 2em;
  font-size: 1rem;
  max-height: 3em;
  border-radius: 0.8em;
  cursor: ${(p) => (p.disabled ? "initial" : "pointer")}; 
  text-color: #fff;
  overflow: hidden;
  opacity: ${(p) => (p.disabled ? 0.3 : 1)};
  :hover {
    opacity: ${(p) => (p.disabled ? 0.3 : 0.8)};
  }
  align-self: center;

  [
`;

const Button = (props) => {
  const { children, type, onClick, ...rest } = props;
  return (
    <ButtonUI {...rest} type={type} onClick={onClick}>
      {children}
    </ButtonUI>
  );
};

export default Button;
