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
  box-shadow: 0px 0px 0px 5px ${(p) => p.theme.shadowColor};
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
            <p>
              <b>Location name:</b> {filter.name}
            </p>
            <p>
              <b>Dimension:</b> {filter.dimension}
            </p>
            <p>
              <b>Type:</b> {filter.type}
            </p>
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
