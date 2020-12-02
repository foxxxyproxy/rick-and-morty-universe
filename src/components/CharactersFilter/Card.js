import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkWrapper = styled(NavLink)`
  display: none;
  text-decoration: none;
  cursor: pointer;
  color: ${(p) => p.theme.headerColor};
  background: ${(p) => p.theme.primary};
  border-radius: 0.8em;

  &:hover {
    box-shadow: 0px 3px 10px ${(p) => p.theme.shadowColor};
  }

  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
  padding-top: 1.5em;
  p {
    text-align: center;
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
