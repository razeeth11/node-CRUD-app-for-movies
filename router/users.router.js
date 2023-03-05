import express from "express";
const router = express.Router();
import { createUser } from "../service/users.service.js";
import bcrypt from "bcrypt";


router.post("/signup", async function (request, response) {

  const {username,password} = request.body;
  const noOfRounds = 5;
  const salt = await bcrypt.genSalt(noOfRounds);
  const hashPass = await bcrypt.hash(password, salt);

  const usersData = await createUser({
    username : username,
    password : hashPass
  });
    
  response.send(usersData)
});

export default router;
