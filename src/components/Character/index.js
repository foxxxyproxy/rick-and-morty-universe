import { useParams } from "react-router-dom";

function Character() {
  let { id } = useParams();
  return <h3>Requested ID: {id}</h3>;
}

export default Character;
