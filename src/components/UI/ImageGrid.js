import styled from "styled-components";
import Container from "./Container";

export const ImageGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
  grid-gap: 1.5rem;
  padding-bottom: 6rem;
`;
