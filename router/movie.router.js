import express from "express";
import {
  allMovies,
  createMovies,
  getMovieById,
  updateMovie,
  dltMovieById,
} from "./allMovies.js";
const router = express.Router();

router.get("/movies", async function (request, response) {
  const movies = await allMovies();
  response.send(movies);
});

router.post("/movies", async function (request, response) {
  const data = request.body;
  const allMovies = await createMovies(data);
  response.send(allMovies);
});

router.get("/movies/:id", async function (request, response) {
  const { id } = request.params;
  const movieById = await getMovieById(id);
  // const movieById = movies.find((movie)=>movie.id === id)
  movieById
    ? response.send(movieById)
    : response
        .status(404)
        .send({ message: "The movie that you searching for is not exist" });
});

router.put("/movies/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  const movieById = await updateMovie(id, data);
  movieById
    ? response.send({ message: "Update successfully" })
    : response
        .status(404)
        .send({ message: "The movie that you searching for is not exist" });
});

router.delete("/movies/:id", function (request, response) {
  const { id } = request.params;
  const deleteMovieById = dltMovieById(id);

  deleteMovieById.deletedCount >= 1
    ? response.send({ message: "Successfully deleted!" })
    : response
        .status(404)
        .send({ message: "The movie that you searching for is not exist" });
});

export default router;
