import React, { useState } from "react";
import Chart from "../Chart/Chart";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CryptoContext } from "../CryptoContext";
import ReactHtmlParser from "react-html-parser";
import CoinInfo from "../Chart/CoinInfo";
import Circle from "./Circle";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const SingleCrypto = () => {
  const { id } = useParams();
  const { currency, symbol } = useContext(CryptoContext);
  const [chartData, setChartData] = useState({});
  const [coinData, setCoinData] = useState({});
  console.log(coinData?.description?.en);

  useEffect(() => {
    fetch(`/api/single-data/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setCoinData(data.data);
      });

    fetch(
      `/api/chart-data/?coin=${id}&currency=${currency}&days=7&interval=daily`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setChartData(data);
      });
  }, [id, currency]);

  // /////here create for example  currency  ``data`` folder or check how to go mongo
  // .then((data) => {
  //     console.log("DATA", data);
  //     setCrypto(data.data)

  // })

  if (!coinData.image) {
    return (
      <p>
        {" "}
        <Circle />
      </p>
    );
  }
  return (
    <div>
      <Container>
        <p>SingleCryptoPage</p>
        <Wrapper>
          <StyledSideNav>
            <img
              src={coinData?.image.large}
              //alt={coinData?.name}
              height="200"
              style={{ marginBottom: 20 }}
            />
            <Heading>{coinData?.name}</Heading>
            <Desc>
              {ReactHtmlParser(coinData?.description?.en.split(". ")[0])}
            </Desc>

            <H2>Rank :{numberWithCommas(coinData?.market_cap_rank)}</H2>
            <H3>
              Current Price : {symbol}{" "}
              {numberWithCommas(chartData?.chartPrices[0].toFixed(2))}
            </H3>
            <H4>
              {" "}
              Market Cap :{symbol}{" "}
              {numberWithCommas(chartData?.chartCaps[0].toFixed(2))}
            </H4>
          </StyledSideNav>{" "}
          {/* <CoinInfo coin={coin} /> */}
          <Chart chartData={chartData} />
        </Wrapper>
      </Container>
    </div>
  );
};

export default SingleCrypto;
const Wrapper = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
`;
const H2 = styled.div`
  margin-bottom: 20px;
  margin-top: 40px;
  color: white;
  font-family: "Roboto", sans-serif;
`;
const H3 = styled.div`
  margin-bottom: 20px;
  color: white;
  font-family: "Roboto", sans-serif;
`;
const H4 = styled.div`
  margin-bottom: 20px;
  color: white;
  font-family: "Roboto", sans-serif;
`;
const Desc = styled.div`
  margin-top: 25px;
  padding: 25px;
  padding-bottom: 10px;
  text-align: justify;
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding-bottom: 5px;
`;
const Heading = styled.div`
  font-weight: bold;
  margin-bottom: 20;
  font-family:  "Roboto", sans-serif;;
  font-size: 36px;
`;
const StyledSideNav = styled.div`
  /* position: fixed; Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 130%;
  width: 30%; /* Set the width of the sidebar */
  //z-index: 1; /* Stay on top of everything */
  //top: 3.4em; /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25;
  border-right: 2px solid grey;
  color: white;
  font-size: 36;
  /* font-family: cursive; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: "center";
  background-color: black;
  color: white;
`;
