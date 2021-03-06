import styled from "styled-components";

const FilterInfo = styled.div`
  box-sizing: border-box;
  padding: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
  div {
    margin-bottom: 0.5em;
  }
`;

const Title = styled.span`
  margin-right: 1em;
  font-weight: bold;
`;

const FilterContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 997px) {
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
