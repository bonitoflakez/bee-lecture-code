// dbConnection.ts

import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.URI_USERNAME}:${process.env.URI_PASSWORD}@${process.env.URI_CLUSTER_URL}/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

export { client };
