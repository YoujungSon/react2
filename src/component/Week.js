import styled from "styled-components";
import "../index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Week = (props) => {
  return (
    <Wrap>
      <p>{props.day}</p>
      <CircleWrap>
        <Circle score={props.num} />
        <Circle score={props.num} />
        <Circle score={props.num} />
        <Circle score={props.num} />
        <Circle score={props.num} />
      </CircleWrap>
      <Link to={`/detail/${props.day}`}>▶</Link>
    </Wrap>
  );
};

export default Week;

const Wrap = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const CircleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 2;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  &:nth-child(1) {
    background-color: ${(props) => (props.score >= 1 ? "blue" : "#ddd")};
  }
  &:nth-child(2) {
    background-color: ${(props) => (props.score >= 2 ? "blue" : "#ddd")};
  }
  &:nth-child(3) {
    background-color: ${(props) => (props.score >= 3 ? "blue" : "#ddd")};
  }
  &:nth-child(4) {
    background-color: ${(props) => (props.score >= 4 ? "blue" : "#ddd")};
  }
  &:nth-child(5) {
    background-color: ${(props) => (props.score >= 5 ? "blue" : "#ddd")};
  }
`;
