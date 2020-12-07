import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkWrapper = styled(NavLink)`
  display: none;
  text-decoration: none;
  cursor: pointer;
  color: ${(p) => p.theme.headerColor};
  background: ${(p) => p.theme.primary};
  border-radius: 0.8em;
  overflow: hidden;
  opacity: 0.9;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 5px ${(p) => p.theme.shadowColor};
    background-size: 150%;
    opacity: 1;
  }

  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
  padding-top: 1.5em;
  p {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div {
    margin: 0 auto;
  }
`;

const Card = (props) => {
  const { id, name, image } = props.info;

  return (
    <>
      <LinkWrapper to={`/Character/${id}`}>
        <div>
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
      </LinkWrapper>
    </>
  );
};

export default Card;
