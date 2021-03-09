import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkWrapper = styled(NavLink)`
  //content-visibility: auto;
  display: none;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  overflow: hidden;

  background: ${(p) => p.theme.primary};
  box-shadow: ${(p) => p.theme.boxShadow};
  backdrop-filter: ${(p) => p.theme.backdropFilter};
  border-radius: ${(p) => p.theme.borderRadius};
  border: ${(p) => p.theme.border};

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 5px ${(p) => p.theme.shadowColor};
    background-size: 150%;
    opacity: 0.9;
  }

  display: flex;
  flex-direction: column;
  //margin-bottom: 1.5em;
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
const Img = styled.img`
  max-width: 100%;
`;

const Card = (props) => {
  const { id, name, image } = props.info;

  return (
    <>
      <LinkWrapper to={`/Character/${id}`}>
        <div>
          <Img src={image} alt={name} />
        </div>
        <p>{name}</p>
      </LinkWrapper>
    </>
  );
};

export default Card;
