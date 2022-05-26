import { useState } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Week from "./component/Week";
import Detail from "./component/Detail";
function App() {
  let title = ["월", "화", "수", "목", "금", "토", "일"];
  let arr = title.map((value) => Math.ceil(Math.random() * 5));
  let [count, setCount] = useState(arr);
  let result = arr.reduce((s, c) => s + c, 0);

  const [avg, setAvg] = useState(result / 7);
  const Reset = () => {
    arr = [0, 0, 0, 0, 0, 0, 0];
    setCount(arr);
    const avg = 0;
    setAvg(avg);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Wrap>
              <h1>내 일주일은?</h1>
              <WeekWrap>
                <Week num={count[0]} day={title[0]} />
                <Week num={count[1]} day={title[1]} />
                <Week num={count[2]} day={title[2]} />
                <Week num={count[3]} day={title[3]} />
                <Week num={count[4]} day={title[4]} />
                <Week num={count[5]} day={title[5]} />
                <Week num={count[6]} day={title[6]} />
              </WeekWrap>
              <Text>
                <p>평균 평점</p>
                <p>{avg.toFixed(1)}점</p>
                <button onClick={Reset}>Reset</button>
              </Text>
            </Wrap>
          }
        />
        <Route path="/detail/:day" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;

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
const WeekWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
const Text = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
