import { useEffect, useState } from "react";

export default function useGetResidents(residents) {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

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
          if (residents.length === dataArray.length) {
            setCharacters(dataArray);
            setLoading(false);
          }
        });
    });
  }, [residents]);

  return { characters, loading };
}
