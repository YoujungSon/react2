import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  let { day } = useParams();
  const [score, setScore] = useState(0);
  const Clicked = (event) => {
    let circleid = event.target.id;
    setScore(circleid);
  };

  return (
    <Wrap>
      <h3>{day}요일 평점 남기기</h3>
      <CircleWrap>
        <One id="1" score={score} onClick={Clicked}></One>
        <One id="2" score={score} onClick={Clicked}></One>
        <One id="3" score={score} onClick={Clicked}></One>
        <One id="4" score={score} onClick={Clicked}></One>
        <One id="5" score={score} onClick={Clicked}></One>
      </CircleWrap>
      <Link to={`/`}>
        <button>평점 남기기</button>
      </Link>
    </Wrap>
  );
};

export default Detail;
const Wrap = styled.div`
  width: 300px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const CircleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const One = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: rgb(221, 221, 221);
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
