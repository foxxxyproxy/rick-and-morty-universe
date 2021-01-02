import styled from "styled-components";

const FilterInfo = styled.div`
  box-sizing: border-box;
  padding: 0.5em 1.5em;
  border-radius: 0.8em;
  font-size: 1rem;
  line-height: 1.5;
  border: 3px solid ${(p) => p.theme.primary};
  background: ${(p) => p.theme.primary};
  color: #fff;
  //border: 5px solid ${(p) => p.theme.shadowColor};

  div {
    margin-bottom: 0.5em;
  }
`;

const Title = styled.span`
  min-width: 50%;
  margin-right: 1em;
  font-weight: bold;
`;

const Header = styled.h2`
  margin-top: -1.5em;
  margin-bottom: 0.5em;
  line-height: 1;
  @media (max-width: 576px) {
    margin-top: 1em;
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

//Component for display selected filter: selected location/episode/dimension
const SelectedFilter = (props) => {
  const { filter, isLocation, isEpisode, isDimension } = props;
  return (
    <FilterContainer>
      <Header>You selected:</Header>
      <FilterInfo>
        {isLocation && (
          <>
            <div>
              <Title>Location name:</Title> <div>{filter.name}</div>
            </div>
            <div>
              <Title>Dimension:</Title>
              <div>{filter.dimension}</div>
            </div>
            <div>
              <Title>Type:</Title>
              <div>{filter.type}</div>
            </div>
          </>
        )}

        {isEpisode && (
          <>
            <div>
              <Title>Episode name:</Title>
              <div>
                {filter.name} {`(${filter.episode})`}
              </div>
            </div>
            <div>
              <Title>Date:</Title>
              <div>{filter.air_date}</div>
            </div>
          </>
        )}

        {isDimension && (
          <>
            <div>
              <Title>Dimension name:</Title> <div>{`"${filter}"`}</div>
            </div>
          </>
        )}
      </FilterInfo>
    </FilterContainer>
  );
};

export default SelectedFilter;
