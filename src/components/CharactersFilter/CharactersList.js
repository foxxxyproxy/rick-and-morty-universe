import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const CharactersList = (props) => {
  const { isLocation, isEpisode, residents } = props;
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    let dataArray = [];
    setCharacters([]);

    residents.forEach((resident) => {
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
        });
    });
  }, [residents]);

  return (
    <>
      {characters.map((character, index) => (
        <Card key={index} info={character} />
      ))}
    </>
  );
};

export default CharactersList;
