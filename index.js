import express from "express"; //"type" : "module"
//  const express = require("express"); ---- "type" : "common.js"
const app = express();
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import { MongoClient } from "mongodb";

const PORT = process.env.PORT;
// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL
const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.use(express.json());  

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊");
});

app.get("/movies",async function (request, response) {
  const movies = await client
  .db('moviesData')
  .collection('movies')
  .find({})
  .toArray()
  response.send(movies);
});

app.post("/movies", async function (request, response) {
  const data = request.body;
  const allMovies = await client
    .db("moviesData")
    .collection("movies")
    .insertMany(data);
  response.send(allMovies);
});

app.get("/movies/:id", async function (request, response) {
  const { id } = request.params;
  const movieById = await client
    .db("moviesData")
    .collection("movies")
    .findOne({ id: id });
  // const movieById = movies.find((movie)=>movie.id === id)
  movieById
    ? response.send(movieById)
    : response.status(404) .send({ message: "The movie that you searching for is not exist" });
});

app.put("/movies/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  const movieById = await client
    .db("moviesData")
    .collection("movies")
    .updateOne({ id: id },{$set : data})
  movieById
    ? response.send({message : "Update successfully"})
    : response.status(404) .send({ message: "The movie that you searching for is not exist" });
});

app.delete("/movies/:id", function (request, response) {
  const { id } = request.params;
  const deleteMovieById = client
    .db("moviesData")
    .collection("movies")
    .deleteOne({ id: id })

  deleteMovieById.deletedCount >= 1
    ? response.send({ message: "Successfully deleted!" })
    : response
        .status(404)
        .send({ message: "The movie that you searching for is not exist" });
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
