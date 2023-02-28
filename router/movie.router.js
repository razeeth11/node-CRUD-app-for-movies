import express from "express";
import {
  getAllMovies,
  createMovie,
  getMovieById,
  updateMovieById,
  dltMovieById,
} from "../service/movies.service.js";
const router = express.Router();

router.get("", async function (request, response) {
  const movies = await getAllMovies();
  response.send(movies);
});

router.post("", async function (request, response) {
  const data = request.body;
  const allMovies = await createMovie(data);
  response.send(allMovies);
});

router.get("/:id", async function (request, response) {
  const { id } = request.params;
  const movieById = await getMovieById(id);
  // const movieById = movies.find((movie)=>movie.id === id)
  movieById
    ? response.send(movieById)
    : response
        .status(404)
        .send({ message: "The movie that you searching for is not exist" });
});

router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  const movieById = await updateMovieById(id, data);
  movieById
    ? response.send({ message: "Update successfully" })
    : response
        .status(404)
        .send({ message: "The movie that you searching for is not exist" });
});

router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  const deleteMovieById = await dltMovieById(id);

  deleteMovieById.deletedCount >= 1
    ? response.send({ message: "Successfully deleted!" })
    : response
        .status(404)
        .send({ message: "The movie that you searching for is not exist" });
});

export default router;  
