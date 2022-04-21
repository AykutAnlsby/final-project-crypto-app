import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Pages/Home";
import Header from "./Header";
import SingleCrypto from "./Pages/SingleCrypto";
import Chart from "./Chart/Chart";
import { useState } from "react";
import { useEffect } from "react";
import ProfileCard from "./Pages/ProfilePage/ProfileCard";

const App = () => {
  return (
    <Router>
      <Header />

      <Wrapper>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <ProfileCard />
        </Route>
        <Route path="/coin/:id">
          <SingleCrypto />
        </Route>
        <Footer />
      </Wrapper>
    </Router>
  );
};

const Wrapper = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  height: calc(110vh - 110px);
`;

const Footer = styled.div`
  padding: 0;
  margin: 0;
`;
export default App;
