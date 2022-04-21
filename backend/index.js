"use strict";
const {
  getMarketCap,
  getChartData,
  getSingleCoin,
  getCoinList,
  getFavoriteCoin,
  followCoin,
  unFollowCoin,
  getProfile,
} = require("./handler");
// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const { router } = require("json-server");

//

express()
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // Nothing to modify above this line
  // ---------------------------------

  // .get ("./api/all-student", Students)
  // .get(("./api/all-student/:id", oneStudent)

  .get("/api/market-cap", getMarketCap) //get the list of everything , bitcoin, currency,price etc....
  .get("/api/chart-data", getChartData) // get price and market cap
  .post("/api/follow-coin", followCoin)
  .post("/api/unfollow-coin", unFollowCoin)
  .get("/api/single-data/:id", getSingleCoin) //get single coin data of 1
  .get("/api/list-data/:currency", getCoinList)
  .get("/api/userlogin", getFavoriteCoin)
  .get("/api/profile", getProfile)
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
