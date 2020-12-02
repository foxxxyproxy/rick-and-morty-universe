import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../utils/useFetch";
import Loader from "../UI/Loader";
import { getDateOnlyString } from "../../utils/helpers";
import Container from "../UI/Container";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  color: ${(p) => p.theme.headerColor};
  background: ${(p) => p.theme.primary};
  box-shadow: 0px 3px 10px ${(p) => p.theme.shadowColor};
  border-radius: 0.8em;
  width: 100%;
  padding: 2em;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  padding: 0 2em;

  @media (max-width: 576px) {
    padding: 0;
  }
  img {
    display: block;
    margin: auto;
  }
`;

const Info = styled.div``;

function Character() {
  const [info, setInfo] = useState("");

  let { id } = useParams();
  const { get, loading } = useFetch(BASE_URL);

  useEffect(() => {
    get(`character/${id}`)
      .then((data) => {
        console.log(data);
        setInfo(data);
      })
      .catch((error) => console(error));
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!info) {
    return <p>Character not found</p>;
  }

  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <img src={info.image} alt={info.name} />
        </ImageWrapper>
        <Info>
          <p>
            <b>Name: </b> {info.name}
          </p>
          <p>
            <b>Status: </b> {info.status}
          </p>
          <p>
            <b>Species: </b> {info.species}
          </p>
          <p>
            <b>Type: </b> {info.type}
          </p>
          <p>
            <b>Gender: </b> {info.gender}
          </p>
          {info.origin && console.log(info.origin.name)}
          {info.origin && (
            <p>
              <b>Origin: </b> {info.origin.name}
            </p>
          )}
          {info.location && (
            <p>
              <b>Location: </b> {info.location["name"]}
            </p>
          )}
          {info.created && (
            <p>
              <b>Created: </b> {getDateOnlyString(new Date(info.created))}
            </p>
          )}
        </Info>
      </Wrapper>
    </Container>
  );
}

export default Character;
