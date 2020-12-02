import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 95%;
  max-width: 60em;
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
  //align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Container = (props) => {
  const { children, ...rest } = props;
  return <ContainerWrapper {...rest}>{children}</ContainerWrapper>;
};

export default Container;
