const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 9000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://Hungry-Food:nRHSqpDuGWBL0yNS@cluster0.zawetzp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri,{serverApi: {version: ServerApiVersion.v1,strict: true,deprecationErrors: true,}});

async function run() {
  try {
    await client.connect();
    const hungryFoodCollection = client.db("Hungry-Food").collection("Menu");

    app.get("/menu", async (req, res) => {
      const query = {};
      const cursor = hungryFoodCollection.find(query);
      const menus = await cursor.toArray();
      res.send(menus);
    });
    
  } finally {}
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Alhamdulliah Your server is Running");
});
app.listen(port, () => {
  console.log("My Love Jannatul Putul Your Server Running");
});
