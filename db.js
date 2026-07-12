import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_CONNECTION_STRING);

export let database;

export async function connectDatabase() {
    await client.connect();

    database = client.db("passportAuthDB");

    console.log("Database connected");
}