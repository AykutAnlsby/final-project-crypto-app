import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../../assets/background.jpg";
import bitcoin from "../../assets/bitcoin.webp";
import cardano from "../../assets/cardano.webp";
import ethereum from "../../assets/ethereum.webp";
import solana from "../../assets/solana.webp";
import xrp from "../../assets/xrp.webp";
import luna from "../../assets/luna.webp";
const Banner = () => {
  return (
    <Container>
      <WrapperImg>
        <DivBox>
          <TagLine>GoGoCrypto</TagLine>
          <BaseLine>Get Today's Cryptocurrency Prices by Market Cap</BaseLine>
          <Link to="/coin/bitcoin">
            <img className="coin" src={bitcoin} width={100} />
          </Link>
          <Link to="/coin/ethereum">
            {" "}
            <img className="coin" src={ethereum} width={100} />
          </Link>
          <Link to="/coin/solana">
            {" "}
            <img className="coin" src={solana} width={100} />
          </Link>
          <Link to="/coin/cardano">
            {" "}
            <img className="coin" src={cardano} width={100} />
          </Link>
          <Link to="/coin/ripple">
            {" "}
            <img className="coin" src={xrp} width={100} />
          </Link>
          <Link to="/coin/terra-luna">
            {" "}
            <img className="coin" src={luna} width={100} />
          </Link>
        </DivBox>
      </WrapperImg>
    </Container>
  );
};
export default Banner;

const Image = styled.div`
  justify-content: space-around;
  width: 100;
  &hover {
    transition: all 0.3s;
    color: antiquewhite;
    color: black;
    border: 2px solid lightblue;
    border-radius: 15px;
  }
`;
const DivBox = styled.div`
  flex-direction: column;
  align-items: center;
`;
const BaseLine = styled.div`
  font-family: "Orbitron", sans-serif;
  font-weight: 200;
  margin-bottom: 15;
  font-size: 24px;
  color: white;
  margin-top: 50px;
  margin-bottom: 80px;
`;
const Container = styled.div`
  flex-direction: "column";
`;
const TagLine = styled.div`
  font-family: "Orbitron", sans-serif;
  font-weight: 600;
  margin-bottom: 15;
  font-size: 48px;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const WrapperImg = styled.div`
  /* margin: 0; */
  height: 450px;
  display: flex;
  flex-direction: "column";
  padding: 10px 0 0 0;
  justify-content: space-around;
  /* width: 250px; */
  background-image: url(${background});
`;
// const C = styled.div`
//   height: 400;
//   display: flex;
//   flex-direction: column;
//   padding-top: 25;
//   justify-content: "space-around";
//   background: `url(${background})`;
