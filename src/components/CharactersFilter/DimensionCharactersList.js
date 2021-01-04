import { useEffect, useState } from "react";
import useGetResidents from "../../utils/useGetResidents";
import List from "./List";

const DimensionCharactersList = (props) => {
  const { dimension, locations } = props;
  const [filteredLocations, setFilteredLocations] = useState("");
  const [residents, setResidents] = useState([]);
  const { characters, loading } = useGetResidents(residents);

  useEffect(() => {
    if (dimension && locations) {
      filterLocations();
    }
  }, [dimension, locations]);

  useEffect(() => {
    if (!filteredLocations) return;

    let uniqueResidents = new Set();

    let rawResidentsArray = filteredLocations.map((location) => [
      location.residents,
    ]);

    //looking for unique residents from all locations in the Demension
    rawResidentsArray.forEach((items) => {
      items.forEach((item) => {
        item.forEach((i) => {
          uniqueResidents.add(i);
        });
      });
    });
    setResidents(Array.from(uniqueResidents));
  }, [filteredLocations]);

  function filterLocations() {
    let filteredLocations = locations.filter(
      (location) => location.dimension === dimension
    );
    setFilteredLocations(filteredLocations);
  }

  return <List characters={characters} loading={loading} />;
};

export default DimensionCharactersList;
