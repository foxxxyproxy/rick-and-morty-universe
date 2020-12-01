import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  font-size: 0.8rem;
  z-index: 10;
  padding: 0 1.7rem;
  padding-bottom: 2px;
  color: ${(p) => p.theme.textColorSecondary};
`;
