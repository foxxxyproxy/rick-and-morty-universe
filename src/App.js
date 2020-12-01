import { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Container from "./components/UI/Container";
import Loader from "./components/UI/Loader";
import useFetch from "./utils/useFetch";
import DropDown from "./components/UI/DropDown";

function App() {
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState("");
  const { get, loading } = useFetch("https://rickandmortyapi.com/api/");

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

  function getAllPages(maxPage, endpoint) {
    //get all locations
    let dataArray = [];

    for (let page = 1; page <= maxPage; page++) {
      get(`${endpoint}?page=${page}`)
        // eslint-disable-next-line no-loop-func
        .then((data) => {
          dataArray = [...dataArray, ...data.results];
          //console.log(dataArray);
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
    <BrowserRouter>
      <Header />

      <Container>
        {loading && <Loader />}
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
      </Container>
    </BrowserRouter>
  );
}

export default App;
