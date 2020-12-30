import { useEffect, useState } from "react";
import { BASE_URL } from "./config";

export default function useFetchAllData() {
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [dimensions, setDimensions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL + "location")
      .then((response) => response.json())
      .then((data) => {
        getAllPages(data.info.pages, "location", data.results);
      })
      .catch((error) => console.error(error));

    fetch(BASE_URL + "episode")
      .then((response) => response.json())
      .then((data) => {
        getAllPages(data.info.pages, "episode", data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  /**
   * get data from all pages to fill the dropdowns
   * (won't use it for a real project)
   * @param {Number} maxPage
   * @param {String} endpoint
   * @return {Array} locations, episodes
   */
  function getAllPages(maxPage, endpoint, result) {
    for (let page = 2; page <= maxPage; page++) {
      fetch(`${BASE_URL}${endpoint}?page=${page}`)
        .then((response) => response.json())
        // eslint-disable-next-line no-loop-func
        .then((data) => {
          result = [...result, ...data.results];
        })
        .catch((error) => console.error(error))
        // eslint-disable-next-line no-loop-func
        .finally(() => {
          if (page === maxPage) {
            setLoading(false);
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

  return { locations, episodes, dimensions, loading };
}
