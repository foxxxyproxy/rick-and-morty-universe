import { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import { generatePath } from "react-router";
import useFetchAllData from "../../utils/useFetchAllData";
import Header from "../Header";
import Container from "../UI/Container";
import Loader from "../UI/Loader";
import DropDown from "../UI/DropDown";
import SelectedFilter from "./SelectedFilter";
import styled from "styled-components";
import CharactersList from "./CharactersList";
import DimensionCharactersList from "./DimensionCharactersList";
import Footer from "../Footer";

const Filters = styled.div`
  grid-column: 1/3;
  padding-right: 150px;
  display: flex;
  flex-direction: column;
  @media (max-width: 660px) {
    width: 100%;
  }
`;

function CharactersFilter() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState("");
  const [selectedDimension, setSelectedDimension] = useState("");
  const [filter, setFilter] = useState("");

  const { locations, episodes, dimensions, loading } = useFetchAllData();
  const history = useHistory();
  const match = useRouteMatch();
  const params = useParams();

  useEffect(() => {
    if (!locations || !episodes || !dimensions) return;
    switch (params.filter) {
      case "location":
        const valueFromUrl = locations.filter(
          (location) => location.id === parseInt(params.id, 10)
        );
        setSelectedLocation(JSON.stringify(valueFromUrl[0]));
        setSelectedEpisode("");
        setSelectedDimension("");
        setFilter(valueFromUrl[0]);
        break;
      case "episode":
        const episodeFromUrl = episodes.filter((episode) => {
          return episode.id === parseInt(params.id, 10);
        });
        setSelectedEpisode(JSON.stringify(episodeFromUrl[0]));
        setSelectedLocation("");
        setSelectedDimension("");
        setFilter(episodeFromUrl[0]);
        break;
      case "dimension":
        const dimensionFromUrl = dimensions.filter(
          (dimension) => dimension === decodeURIComponent(params.id)
        );
        setSelectedDimension(JSON.stringify(dimensionFromUrl[0]));
        setSelectedEpisode("");
        setSelectedLocation("");
        setFilter(dimensionFromUrl[0]);
        break;
      default:
        break;
    }
  }, [params, locations, episodes, dimensions]);

  function updateHistory(filter, targetValue) {
    let value = JSON.parse(targetValue);
    if (!params.filter && !params.id) {
      history.push(`${match.path}/${filter}/${value.id ? value.id : value}`);
    } else {
      const path = generatePath(match.path, {
        filter: filter,
        id: value.id ? value.id : value,
      });
      history.push(path);
    }
  }

  function handleLocationChange(e) {
    setSelectedEpisode("");
    setSelectedDimension("");
    updateHistory("location", e.target.value);
  }
  function handleEpisodeChange(e) {
    setSelectedLocation("");
    setSelectedDimension("");
    updateHistory("episode", e.target.value);
  }

  function handleDimensionChange(e) {
    setSelectedLocation("");
    setSelectedEpisode("");
    updateHistory("dimension", e.target.value);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Header />
      <Container>
        {loading && <Loader />}
        {!loading && (
          <Filters>
            {locations && (
              <DropDown
                type="locations"
                options={locations}
                value={selectedLocation}
                onChange={handleLocationChange}
                isActive={selectedLocation}
              />
            )}

            {episodes && (
              <DropDown
                type="episodes"
                options={episodes}
                value={selectedEpisode}
                onChange={handleEpisodeChange}
                isActive={selectedEpisode}
              />
            )}

            {dimensions && (
              <DropDown
                type="dimensions"
                options={dimensions}
                value={selectedDimension}
                onChange={handleDimensionChange}
                isActive={selectedDimension}
              />
            )}
          </Filters>
        )}

        {filter && (
          <SelectedFilter
            isLocation={selectedLocation}
            isEpisode={selectedEpisode}
            isDimension={selectedDimension}
            filter={filter}
          />
        )}
      </Container>

      {filter && (selectedLocation || selectedEpisode) && (
        <CharactersList
          residents={selectedLocation ? filter.residents : filter.characters}
        />
      )}

      {filter && selectedDimension && (
        <DimensionCharactersList dimension={filter} locations={locations} />
      )}
      <Footer />
    </div>
  );
}

export default CharactersFilter;
