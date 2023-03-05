import {client} from "../index.js";

export async function createUser(data) {
  return await client.db("moviesData").collection("users").insertOne(data)
}

