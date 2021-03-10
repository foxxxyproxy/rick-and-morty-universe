import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 95%;
  max-width: 60em;
  margin: 0 auto;
  margin-bottom: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  grid-gap: 1.5rem;
`;

const Container = (props) => {
  const { children, ...rest } = props;
  return <ContainerWrapper {...rest}>{children}</ContainerWrapper>;
};

export default Container;
