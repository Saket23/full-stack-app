import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  margin: auto;
`;

export const Title = styled.div`
  font-size: 24px;
  padding: 10px;
  text-align: center;
  border: 1px solid #d5d5d5;
  font-weight: 600;
`;

export const Data = styled.div`
  font-size: 18px;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  border-left: 1px solid #d5d5d5;
  background-color: ${props => (props.id % 2 === 0 ? "#F5F5F5" : "#C8C8C8")};
  color: ${props => (props.id % 2 === 0 ? "black" : "white")};
`;
