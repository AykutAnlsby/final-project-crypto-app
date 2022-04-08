import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Pages/Home";
import Header from "./Header";
import CoinMainPage from "./Pages/CoinMainPage";
import Chart from "./Chart/Chart";
import { useState } from "react";
import { useEffect } from "react";
const App = () => {
  const [currency, setCurreny] = useState("USD"); // hook arror

  // useEffect(()

  // fetch (`/url`))
  // .then(res)=>res.json())
  // .then ((json) => useCurrency(json.data))
  return (
    <Router>
      <Header />
      <Wrapper>
        <div>
          <Route exact path="/">
            <Home />
          </Route>
        </div>
        <Route exact path="/chart">
          <Chart />
        </Route>
        <Route path="/coins/:id">
          <CoinMainPage />
        </Route>
        {/* <Footer /> */}
      </Wrapper>
    </Router>
  );
};

const Wrapper = styled.div`
  background-color: orange;
  display: flex;
  flex-direction: column;
  height: calc(110vh - 110px);
`;

// const Footer = styled.div`
//   padding: 0;
//   margin: 0;
// `;
export default App;

/* <Router>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Router> */
