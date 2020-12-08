import Loader from "../UI/Loader";
import Card from "./Card";
import useGetResidents from "../../utils/useGetResidents";

const CharactersList = (props) => {
  const { residents } = props;
  const { characters, loading } = useGetResidents(residents);

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

export default CharactersList;
