"use strict";
const { getMarketCap, getChartData } = require("./handler");
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
  .get("/api/market-cap", getMarketCap)
  .get("/api/chart-data", getChartData)
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
