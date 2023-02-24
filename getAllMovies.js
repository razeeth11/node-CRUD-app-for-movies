import { client } from "./index.js";

export async function movies(data) {
  return await client.db("moviesData").collection("movies").insertMany(data);
}
export async function updateMovies(id, data) {
  return await client
    .db("moviesData")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
export async function deleteMoviesById(id) {
  return await client
    .db("moviesData")
    .collection("movies")
    .deleteOne({ id: id });
}
export async function getMoviesById(id) {
  return await client.db("moviesData").collection("movies").findOne({ id: id });
}
export async function getAllMovies() {
  return await client.db("moviesData").collection("movies").find({}).toArray();
}
