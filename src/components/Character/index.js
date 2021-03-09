import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import styled from "styled-components";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../utils/useFetch";
import Loader from "../UI/Loader";
import { getDateOnlyString } from "../../utils/helpers";

import Header from "../Header";
import Footer from "../Footer";
import ButtonBack from "../UI/Button";

const Wrapper = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 95%;
  max-width: 60em;
  margin: 0 auto;
  color: ${(p) => p.theme.textColor};
  background: ${(p) => p.theme.primary};
  box-shadow: ${(p) => p.theme.boxShadow};
  backdrop-filter: ${(p) => p.theme.backdropFilter};
  border-radius: ${(p) => p.theme.borderRadius};
  border: ${(p) => p.theme.border};

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
    line-height: 1.6;
    margin-block-end: 0.7em;
    margin-block-start: 0.7em;
  }
  span {
    background: ${(p) => p.theme.primary};
    box-shadow: ${(p) => p.theme.boxShadow};
    backdrop-filter: ${(p) => p.theme.backdropFilter};
    border-radius: ${(p) => p.theme.borderRadius};
    border: ${(p) => p.theme.border};
    padding: 3px 8px;
    font-weight: bold;
    margin: 1em;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
`;

const PageTitle = styled.h1`
  text-align: center;
  padding-left: 0.5em;
  font-size: 1.5em;
  span {
    background: ${(p) => p.theme.secondary};
    color: ${(p) => p.theme.textColor};
    padding: 3px 8px;
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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

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
      <Footer />
    </div>
  );
}

export default Character;
