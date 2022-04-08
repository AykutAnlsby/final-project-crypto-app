const { json } = require("express");
//const { MongoClient } = require("mongodb");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
//const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const { NOMICS_KEY } = process.env;

const getMarketCap = async (req, res) => {
  const { convert } = req.query;

  try {
    // const response = await fetch(
    //   `https://api.nomics.com/v1/currencies/ticker?key=${NOMICS_KEY}&ids=BTC,ETH,XRP&interval=1d,2d&convert=${convert}&per-page=100&page=1`
    // );
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${convert}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`
    );

    const data = await response.json();
    console.log(data);

    return res.status(200).json({ status: 200, data });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  }
};

const getChartData = async (req, res) => {
  const { coin, currency, days, interval } = req.query;

  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`
    );

    const data = await response.json();
    console.log(data);

    const chartPrices = data.prices.map((el) => el[1]);
    const chartCaps = data.market_caps.map((el) => el[1]);
    const chartVolume = data.total_volumes.map((el) => el[1]);

    return res
      .status(200)
      .json({ status: 200, chartPrices, chartCaps, chartVolume });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  }
};

module.exports = { getMarketCap, getChartData };
