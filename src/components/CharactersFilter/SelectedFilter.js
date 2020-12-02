import styled from "styled-components";

const FilterInfo = styled.div`
  box-sizing: border-box;
  padding: 0.5em 1.5em;
  border-radius: 0.8em;
  font-size: 1rem;
  line-height: 1.2;
  border: 3px solid ${(p) => p.theme.primary};
  background: ${(p) => p.theme.primary};
  color: #fff;
`;

const Header = styled.h2`
  margin-top: -1.2em;
  margin-bottom: 0.2em;
  line-height: 1;
  @media (max-width: 576px) {
    margin-top: 0;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  width: 35%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const SelectedFilter = (props) => {
  const { filter, isLocation, isEpisode, isDimension } = props;
  return (
    <FilterContainer>
      <Header>You Select:</Header>
      <FilterInfo>
        {isLocation && (
          <>
            <p>{`Location name: ${filter.name}`}</p>
            <p>{`Dimension: ${filter.dimension}`}</p>
            <p>{`Type: ${filter.type}`}</p>
          </>
        )}

        {isEpisode && (
          <>
            <p>{`Episode name: ${filter.name} (${filter.episode})`}</p>
            <p>{`Date: ${filter.air_date}`} </p>
          </>
        )}

        {isDimension && (
          <>
            <p>{`Dimension name: "${filter}" `}</p>
          </>
        )}
      </FilterInfo>
    </FilterContainer>
  );
};

export default SelectedFilter;
