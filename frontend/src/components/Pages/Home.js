import React from "react";
import styled from "styled-components";
import Banner from "../Banner/Banner";

import BasicTable from "../Banner/TableBasic/BasicTable";
// import Crypto from "../Banner/SingleCrypto";
// import background from "../Banner/img/background.jpg";

const Home = () => {
  return (
    <>
      <Banner />
      <BasicTable />
      {/* <Crypto /> */}
      {/* <div styles={{ backgroundImage: `url(${background})` }}></div> */}
    </>
  );
};

export default Home;
