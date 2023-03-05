import express from "express";
const router = express.Router();
import { createUser } from "../service/users.service.js";
import bcrypt from 'bcrypt';


    async function genPassword(Password){
  const noOfRounds = 10;
  const salt = await bcrypt.genSalt(noOfRounds)
  const hashPassword = await bcrypt.hash(Password,salt)
  console.log(hashPassword);
  console.log(salt);
  return hashPassword;
}

router.post("/signUp", async function (request, response) {
  const {username,password} = request.body;
   const hashPassword = await   genPassword("razeeth123");
    const usersData = await createUser({
      username : username,
      password : hashPassword
    });
    response.send(usersData);

});

export default router;
