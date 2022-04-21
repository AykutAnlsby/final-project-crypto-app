const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const greetings = require("data/greetings.json");
console.log("greetings");
//Create an async function called batchImport.
const batchImport = async () => {
  //put in a console.log of the greetings variable.
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    // We are using the 'lettry' database
    const db = client.db("lettry");
    const result = await db.collection("greetings").insertMany(greetings);
    console.log("done!");
  } catch (err) {
    console.error(err);
  }

  // TODO: close...
  client.close();
  console.log("disconnected!");
};
batchImport("lettry");
// module.exports = { batchImport };
