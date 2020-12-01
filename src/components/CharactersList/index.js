import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/config";

import Header from "../Header";
import Container from "../UI/Container";
import Loader from "../UI/Loader";
import useFetch from "../../utils/useFetch";
import DropDown from "../UI/DropDown";
import styled from "styled-components";

const Filters = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const SelectedResult = styled.div`
  box-sizing: border-box;
  padding: 0.5em 1.5em;
  border-radius: 0.8em;
  font-size: 1rem;
  line-height: 1.2;
  border: 3px solid ${(p) => p.theme.primary};
  width: 35%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

function CharactersList() {
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState("");
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
                onChange={(e) => setSelectedLocation(e.target.value)}
              />
            )}

            {episodes && (
              <DropDown
                type="episodes"
                options={episodes}
                value={selectedEpisode}
                onChange={(e) => setSelectedEpisode(e.target.value)}
              />
            )}
          </Filters>
        )}

        {selectedLocation && (
          <SelectedResult>
            <p>You Select: </p>
            {selectedLocation}
            {console.log(
              locations.filter((location) => {
                return location.name === selectedLocation;
              })
            )}
          </SelectedResult>
        )}
      </Container>
    </>
  );
}

export default CharactersList;
