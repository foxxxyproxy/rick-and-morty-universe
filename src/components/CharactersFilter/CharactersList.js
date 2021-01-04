import useGetResidents from "../../utils/useGetResidents";
import List from "./List";

const CharactersList = (props) => {
  const { residents } = props;
  const { characters, loading } = useGetResidents(residents);

  return <List characters={characters} loading={loading} />;
};

export default CharactersList;
