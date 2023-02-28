import {client} from "../index.js";

export async function getAllMovies() {
  return await client.db("moviesData").collection("movies").find({}).toArray();
}
export async function createMovie(data) {
  return await client.db("moviesData").collection("movies").insertMany(data);
}
export async function getMovieById(id) {
  return await client.db("moviesData").collection("movies").findOne({ id: id });
}
export async function updateMovieById(id, data) {
  return await client
    .db("moviesData")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
export async function dltMovieById(id) {
  return await client
    .db("moviesData")
    .collection("movies")
    .deleteOne({ id: id });
};
