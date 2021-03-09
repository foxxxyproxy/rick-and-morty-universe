import styled from "styled-components";

const FilterInfo = styled.div`
  box-sizing: border-box;
  padding: 0.5em 1.5em;
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;

  //background: ${(p) => p.theme.primary};
  box-shadow: ${(p) => p.theme.boxShadow};
  backdrop-filter: ${(p) => p.theme.backdropFilter};
  border-radius: ${(p) => p.theme.borderRadius};
  border: ${(p) => p.theme.border};

  div {
    margin-bottom: 0.5em;
  }
`;

const Title = styled.span`
  min-width: 50%;
  margin-right: 1em;
  font-weight: bold;
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
      <FilterInfo title="Filter you selected">
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
