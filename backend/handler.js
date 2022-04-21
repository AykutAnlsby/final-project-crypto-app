const { json } = require("express");
require("dotenv").config();
const { MongoClient } = require("mongodb");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { MONGO_URI } = process.env;
const client = new MongoClient(MONGO_URI, options);

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
//const { v4: uuidv4 } = require("uuid");

const { NOMICS_KEY } = process.env;

const getProfile = async (req, res) => {
  try {
    await client.connect();
    const email = req.query.email; // query parameters
    console.log("email", email);
    const db = await client.db("db-name");

    const user = await db.collection("users").findOne({ email: email });
    console.log("user", user);
    res
      .status(200)
      .json({ status: 200, data: user, message: "Request successful" });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      status: 500,
      message: "failure",
    });
  }

  await client.close();
  console.log("disconnected!");
};

///////////////////////////////////////////////

const getFavoriteCoin = async (req, res) => {
  try {
    await client.connect();
    const email = req.body.email;
    const db = await client.db("db-name");
    console.log(email, "email");
    const data = await db
      .collection("users")
      .findOneAndUpdate(
        { email: email },
        { $set: { email: email } },
        { upsert: true }
      );

    res
      .status(200)
      .json({ status: 200, data: data.value, message: "Request successful" });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "failure",
    });
  }

  await client.close();
  console.log("disconnected!");
};

/// coin list form home page
const getCoinList = async (req, res) => {
  const { currency } = req.params;
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=1&sparkline=false`

      // &price_change_percentage=1h%2C24h%2C7d
      //
      //

      // `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=${days}`
    );
    const data = await response.json();
    console.log(data);

    return res.status(200).json({ status: 200, data });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  }
};

// Follow favourite crypto coin
const followCoin = async (req, res) => {
  const id = req.body.coinName;
  console.log(req.body);
  console.log("id", id);
  try {
    await client.connect();
    const email = req.body.email;
    const db = await client.db("db-name");
    console.log(email, "email");
    const data = await db
      .collection("users")
      .findOneAndUpdate(
        { email: email },
        { $addToSet: { followedCoins: id } },
        { upsert: true }
      );

    res
      .status(200)
      .json({ status: 200, data: data.value, message: "Request successful" });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  }
};
//Unfollow
const unFollowCoin = async (req, res) => {
  const id = req.body.coinName;
  console.log(req.body);
  console.log("id", id);
  try {
    await client.connect();
    const email = req.body.email;
    const db = await client.db("db-name");
    console.log(email, "email");
    const data = await db
      .collection("users")
      .findOneAndUpdate(
        { email: email },
        { $pull: { followedCoins: id } },
        { upsert: true }
      );

    res
      .status(200)
      .json({ status: 200, data: data.value, message: "Request successful" });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  }
};
////single coin price
const getSingleCoin = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    const data = await response.json();
    console.log(data);

    return res.status(200).json({ status: 200, data });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  }
};

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
// get historical data
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

module.exports = {
  getMarketCap,
  getChartData,
  getSingleCoin,
  getCoinList,
  getFavoriteCoin,
  followCoin,
  unFollowCoin,
  getProfile,
};
