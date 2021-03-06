import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  border: 1px solid #dcdcdc;
`;

export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  cursor: pointer;
  text-decoration: none;

  :hover {
    font-size: 24px;
  }
`;

export const Title = styled.div`
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  font-weight: 900;
`;

export const Data = styled.div`
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  background-color: ${props => (props.id % 2 === 0 ? "#F5F5F5" : "#C8C8C8")};
  color: ${props => (props.id % 2 === 0 ? "black" : "white")};
`;
