import {client} from "../index.js";

export async function createUser(username,hashPassword) {
  return await client.db("moviesData").collection("users").insertOne(username,hashPassword);
}

