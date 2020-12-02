import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../UI/Loader";
import Card from "./Card";

const DimensionCharactersList = (props) => {
  const { dimension, locations } = props;
  const [filteredLocations, setFilteredLocations] = useState("");
  const [residents, setResidents] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  //console.log(dimension);
  //console.log({ locations });

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

  useEffect(() => {
    if (!residents) return;

    let dataArray = [];
    setCharacters([]);

    residents.forEach((resident) => {
      setLoading(true);

      fetch(resident)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
          }
          dataArray = [...dataArray, data];
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        })
        .finally(() => {
          setCharacters(dataArray);
          setLoading(false);
        });
    });
  }, [residents]);

  function filterLocations() {
    let filteredLocations = locations.filter(
      (location) => location.dimension === dimension
    );
    setFilteredLocations(filteredLocations);
    //console.log(filteredLocations);
  }

  if (loading) {
    return <Loader />;
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
