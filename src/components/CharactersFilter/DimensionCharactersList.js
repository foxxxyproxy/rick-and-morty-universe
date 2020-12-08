import { useEffect, useState } from "react";
import Loader from "../UI/Loader";
import Card from "./Card";
import useGetResidents from "../../utils/useGetResidents";

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

  if (loading) {
    return <Loader />;
  }

  if (!residents || residents.length === 0) {
    return <p>No characters to show</p>;
  }

  return (
    <>
      {characters.map((character, index) => (
        <Card key={index} info={character} />
      ))}
    </>
  );
};

export default DimensionCharactersList;
