import express from "express"; //"type" : "module"
//  const express = require("express"); ---- "type" : "common.js"
const app = express();
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { MongoClient } from "mongodb";
import moviesRouter from "./router/movie.router.js";
import usersRouter from "./router/users.router.js";
import cors from "cors";


const PORT = process.env.PORT;
// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.use(cors());
app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊");
});

app.use("/movies", moviesRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


