export async function allMovies() {
  return await client.db("moviesData").collection("movies").find({}).toArray();
}
export async function createMovies(data) {
  return await client.db("moviesData").collection("movies").insertMany(data);
}
export async function getMovieById(id) {
  return await client.db("moviesData").collection("movies").findOne({ id: id });
}
export async function updateMovie(id, data) {
  return await client
    .db("moviesData")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
export function dltMovieById(id) {
  return client.db("moviesData").collection("movies").deleteOne({ id: id });
}
