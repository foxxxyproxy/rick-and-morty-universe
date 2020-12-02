import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../UI/Loader";
import Card from "./Card";

const CharactersList = (props) => {
  const { isLocation, isEpisode, residents } = props;
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
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

export default CharactersList;
