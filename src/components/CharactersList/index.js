import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/config";

import Header from "../Header";
import Container from "../UI/Container";
import Loader from "../UI/Loader";
import useFetch from "../../utils/useFetch";
import DropDown from "../UI/DropDown";
import SelectedFilter from "./SelectedFilter";
import styled from "styled-components";

const Filters = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

function CharactersList() {
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState("");
  const [filter, setFilter] = useState("");
  const { get, loading } = useFetch(BASE_URL);

  useEffect(() => {
    get("location")
      .then((data) => {
        setLocations(data.results);
        getAllPages(data.info.pages, "location");
      })
      .catch((error) => console.error(error));

    get("episode")
      .then((data) => {
        setEpisodes(data.results);
        getAllPages(data.info.pages, "episode");
      })
      .catch((error) => console.error(error));
  }, []);

  //get data from all pages
  function getAllPages(maxPage, endpoint) {
    let dataArray = [];

    for (let page = 1; page <= maxPage; page++) {
      get(`${endpoint}?page=${page}`)
        // eslint-disable-next-line no-loop-func
        .then((data) => {
          dataArray = [...dataArray, ...data.results];
        })
        .catch((error) => console.error(error))
        // eslint-disable-next-line no-loop-func
        .finally(() => {
          if (endpoint === "location") {
            setLocations([...locations, ...dataArray]);
          } else if (endpoint === "episode") {
            setEpisodes([...locations, ...dataArray]);
          }
        });
    }
  }

  function handleLocationChange(e) {
    setSelectedLocation(e.target.value);
    setFilter(JSON.parse(e.target.value));
    setSelectedEpisode("");
  }
  function handleEpisodeChange(e) {
    setSelectedEpisode(e.target.value);
    setFilter(JSON.parse(e.target.value));
    setSelectedLocation("");
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
              />
            )}

            {episodes && (
              <DropDown
                type="episodes"
                options={episodes}
                value={selectedEpisode}
                onChange={handleEpisodeChange}
              />
            )}
          </Filters>
        )}

        {filter && (
          <SelectedFilter isLocation={selectedLocation} filter={filter} />
        )}
      </Container>
    </>
  );
}

export default CharactersList;
