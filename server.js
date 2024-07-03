import express from "express";
import cors from "cors";
import reviews from "./api/reviews.route.js";

const connString = "mongodb+srv://markgreezy2k19:pf5g1rL2VpxxWybp@cluster0.hb4lvyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/v1/reviews", reviews);
app.use("*", (req, res) => res.status(404).json({"error": "not found :("}));

export default app;


/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://markgreezy2k19:<password>@cluster0.hb4lvyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); */
