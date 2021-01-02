import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import styled from "styled-components";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../utils/useFetch";
import Loader from "../UI/Loader";
import { getDateOnlyString } from "../../utils/helpers";
import Container from "../UI/Container";
import Header from "../Header";
import ButtonBack from "../UI/Button";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  color: ${(p) => p.theme.textColor};
  background: ${(p) => p.theme.primary};
  //box-shadow: 0px 0px 0px 5px ${(p) => p.theme.shadowColor};
  border-radius: 0.8em;
  width: 100%;
  padding: 2em;
  margin-bottom: 6em;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  padding: 0 2.5em;

  @media (max-width: 576px) {
    padding: 0;
    padding-bottom: 1em;
  }
  img {
    display: block;
    margin: auto;
  }
`;

const Info = styled.div`
  p {
    font-weight: bold;
    line-height: 1.5;
  }
  span {
    background: ${(p) => p.theme.secondaryDark};
    padding: 5px;
    font-weight: bold;
    margin: 1em;
  }
`;

const PageTitle = styled.h1`
  text-align: center;
  padding-left: 0.5em;
  span {
    background: ${(p) => p.theme.secondaryDark};
    color: ${(p) => p.theme.textColor};
    padding: 0 5px;
  }
`;

function Character() {
  const [info, setInfo] = useState("");
  const { get, loading } = useFetch(BASE_URL);

  let history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    get(`character/${id}`)
      .then((data) => {
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
    <>
      <Header />
      <Container>
        <ButtonBack onClick={() => history.goBack()}>
          &#x21E6; Back home
        </ButtonBack>
        <PageTitle>
          <span>{info.name}</span> — Personal Data
        </PageTitle>
        <Wrapper>
          <ImageWrapper>
            <img src={info.image} alt={info.name} />
          </ImageWrapper>
          <Info>
            <p>
              Name: <span>{info.name}</span>
            </p>
            <p>
              Status: <span>{info.status}</span>
            </p>
            <p>
              Species: <span>{info.species}</span>
            </p>
            <p>
              Type: <span>{info.type || "Unknown"}</span>
            </p>
            <p>
              Gender: <span>{info.gender}</span>
            </p>
            {info.origin && (
              <p>
                Origin: <span>{info.origin.name}</span>
              </p>
            )}
            {info.location && (
              <p>
                Location: <span>{info.location["name"]}</span>
              </p>
            )}
            {info.created && (
              <p>
                Created:
                <span>{getDateOnlyString(new Date(info.created))}</span>
              </p>
            )}
          </Info>
        </Wrapper>
      </Container>
    </>
  );
}

export default Character;
