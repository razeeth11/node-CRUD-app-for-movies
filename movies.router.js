import express from "express";
import {
  getAllMovies,
  getMoviesById,
  deleteMoviesById,
  updateMovies,
  movies,
} from "./getAllMovies.js";
const router = express.Router();

router.get("", async function (request, response) {
  const movie1 = await getAllMovies();

  response.send(movie1);
});

router.get("/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  const movie = await getMoviesById(id);
  //  const movie = movies.find((mv) => mv.id === id );
  movie
    ? response.send(movie)
    : response.status(404).send({ Message: "PAGE NOT FOUND !!" });
});

router.delete("/movies/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  const movie = await deleteMoviesById(id);
  //  const movie = movies.find((mv) => mv.id === id );
  movie.deletedCount >= 1
    ? response.send({ Message: "Successfully Deleted!" })
    : response.status(404).send({ Message: "MOVIE NOT FOUND !!" });
});

router.put(
  "/movies/:id",
  express.json(),
  async function (request, response) {
    const { id } = request.params;
    const data = request.body;
    console.log(id);
    const movie = await updateMovies(id, data);
    //  const movie = movies.find((mv) => mv.id === id );
    console.log(movie);
    movie
      ? response.send(movie)
      : response.status(404).send({ Message: "MOVIE NOT FOUND !!" });
  }
);

router.post("", async function (request, response) {
  const data = request.body;
  const result = await movies(data);
  response.send(result);
});

export default router;
