import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/config";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import Header from "../Header";
import Container from "../UI/Container";
import Loader from "../UI/Loader";
import useFetch from "../../utils/useFetch";
import DropDown from "../UI/DropDown";
import SelectedFilter from "./SelectedFilter";
import styled from "styled-components";
import CharactersList from "./CharactersList";
import DimensionCharactersList from "./DimensionCharactersList";
import { generatePath } from "react-router";

const Filters = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

function CharactersFilter() {
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [dimensions, setDimensions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState("");
  const [selectedDimension, setSelectedDimension] = useState(null);
  const [filter, setFilter] = useState("");
  const { get, loading } = useFetch(BASE_URL);

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
        setFilter(valueFromUrl[0]);
        break;
      case "episode":
        const episodeFromUrl = episodes.filter(
          (episode) => episode.id === parseInt(params.id, 10)
        );
        setSelectedEpisode(JSON.stringify(episodeFromUrl[0]));
        setFilter(episodeFromUrl[0]);
        break;
      case "dimension":
        const dimensionFromUrl = dimensions.filter(
          (dimension) => dimension === decodeURIComponent(params.id)
        );
        setSelectedDimension(JSON.stringify(dimensionFromUrl[0]));
        setFilter(dimensionFromUrl[0]);
        break;
      default:
        break;
    }
  }, [params, locations, episodes, dimensions]);

  useEffect(() => {
    console.log("get data");
    get("location")
      .then((data) => {
        getAllPages(data.info.pages, "location", data.results);
      })
      .catch((error) => console.error(error));

    get("episode")
      .then((data) => {
        getAllPages(data.info.pages, "episode", data.results);
      })
      .catch((error) => console.error(error));

    function getAllPages(maxPage, endpoint, result) {
      for (let page = 2; page <= maxPage; page++) {
        get(`${endpoint}?page=${page}`)
          // eslint-disable-next-line no-loop-func
          .then((data) => {
            result = [...result, ...data.results];
          })
          .catch((error) => console.error(error))
          // eslint-disable-next-line no-loop-func
          .finally(() => {
            if (page === maxPage) {
              if (endpoint === "location") {
                getDimensions(result);
                setLocations(result);
              } else if (endpoint === "episode") {
                setEpisodes(result);
              }
            }
          });
      }
    }
  }, [get]);

  /**
   * get data from all pages to fill the dropdowns
   * (won't use it for a real project)
   * @param {Number} maxPage
   * @param {String} endpoint
   * @return {Array} locations, episodes
   */

  /**
   * get unique dimensions to fill the dropdown
   * @param {Array} dataArray
   * @return {Array} unique dimensions
   */
  function getDimensions(dataArray) {
    let uniqueDimensions = new Set();
    dataArray.forEach((item) => uniqueDimensions.add(item.dimension));
    setDimensions(Array.from(uniqueDimensions));
  }

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
    <>
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

      <Container>
        {filter && (selectedLocation || selectedEpisode) && (
          <CharactersList
            residents={selectedLocation ? filter.residents : filter.characters}
          />
        )}

        {filter && selectedDimension && (
          <DimensionCharactersList dimension={filter} locations={locations} />
        )}
      </Container>
    </>
  );
}

export default CharactersFilter;
