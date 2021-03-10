import React from "react";
import styled from "styled-components";

const ButtonUI = styled.button`
  position: static;
  color: white;
  padding: 0.6em 1em;
  min-width: 2em;
  font-size: 1rem;
  max-height: 3em;

  cursor: ${(p) => (p.disabled ? "initial" : "pointer")};
  text-color: #fff;
  overflow: hidden;

  background: ${(p) => p.theme.secondary};
  box-shadow: ${(p) => p.theme.boxShadow};
  backdrop-filter: ${(p) => p.theme.backdropFilter};
  border-radius: ${(p) => p.theme.borderRadius};
  border: ${(p) => p.theme.border};

  opacity: ${(p) => (p.disabled ? 0.3 : 1)};
  :hover {
    opacity: ${(p) => (p.disabled ? 0.3 : 0.8)};
  }
  align-self: center;
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
