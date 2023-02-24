import express from 'express';
import client from "./index.js"
const router = express.Router()


router.get("", async function (request, response) {
  const movie1 = await client
  .db('moviesData')
  .collection('movies')
  .find({})
  .toArray();
   
  response.send(movie1)
 });
 
 
 router.get("/:id", async function (request, response) {
   const { id } = request.params
   console.log(id);
   const movie = await client
   .db('moviesData')
   .collection('movies')
   .findOne({id: id});
   //  const movie = movies.find((mv) => mv.id === id );
   movie ? response.send(movie) : response.status(404).send({Message : "PAGE NOT FOUND !!"});
  });
  
  router.delete("/movie/:id", async function (request, response) {
    const { id } = request.params
    console.log(id);
    const movie = await client
    .db('moviesData')
    .collection('movies')
    .deleteOne({id: id});
    //  const movie = movies.find((mv) => mv.id === id );
    movie.deletedCount >= 1 
    ? response.send({ Message : "Successfully Deleted!"}) 
    : response.status(404).send({Message : "MOVIE NOT FOUND !!"});
  });
  
  router.put("/movieUpdate/:id", express.json(), async function (request, response) {
    const { id } = request.params
    const data = request.body
    console.log(id);
    const movie = await client
    .db('moviesData')
    .collection('movies')
    .updateOne({id: id},{$set : data});
    //  const movie = movies.find((mv) => mv.id === id );
    console.log(movie);
    movie 
    ? response.send(movie) 
    : response.status(404).send({Message : "MOVIE NOT FOUND !!"});
   });

    router.post("", async function (request, response) {
   const data = request.body
   const result = await client
   .db('moviesData')
   .collection('movies')
   .insertMany(data)
   response.send(result)
 })

 export default router 