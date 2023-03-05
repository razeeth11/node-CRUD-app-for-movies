import {client} from "../index.js";

export async function createUser(data) {
  return await client.db("moviesData").collection("users").insertOne(data)
}

export async function getUserByName(username) {
  return await client.db("moviesData").collection("users").findOne({username : username})
}

export async function getUserName(username) {
  return await client.db("moviesData").collection("users").findOne({username : username})
}