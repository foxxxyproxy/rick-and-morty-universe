import Loader from "../UI/Loader";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../UI/Container";
import { ImageGrid } from "../UI/ImageGrid";
import Button from "../UI/Button";
import { MAX_PER_PAGE } from "../../utils/config";

const ShowMoreButton = styled(Button)`
  position: relative;
  bottom: 6em;
  left: 50%;
  transform: translateX(-50%);
`;

const List = (props) => {
  const { characters, loading } = props;
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPages(null);
    if (characters) {
      const elementsNumber = characters.length;
      if (elementsNumber > MAX_PER_PAGE) {
        setPages(Math.ceil(elementsNumber / MAX_PER_PAGE));
      }
    }
  }, [characters]);

  function handleShowMoreClick() {
    if (currentPage < pages) {
      setCurrentPage((prev) => prev + 1);
    }
  }

  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }
  if (!characters || characters.length === 0) {
    return (
      <Container>
        <div style={{ margin: "0 auto" }}>No characters to show</div>
      </Container>
    );
  }
  return (
    <>
      <ImageGrid>
        {characters.slice(0, MAX_PER_PAGE * currentPage).map((character) => (
          <Card key={character.id} info={character} />
        ))}
      </ImageGrid>
      {pages && (
        <ShowMoreButton
          disabled={currentPage === pages}
          onClick={handleShowMoreClick}
        >
          {currentPage === pages ? "That's it!" : "⇩ Show more"}
        </ShowMoreButton>
      )}
    </>
  );
};

export default List;
