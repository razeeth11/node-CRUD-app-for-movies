import express from "express";
const router = express.Router();
import { createUser,getUserByName,getUserName } from "../service/users.service.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


router.post("/signup", async function (request, response) {

  const {username,password} = request.body;
  const noOfRounds = 5;
  const getByName = await getUserByName(username);

  if(getByName){
      response.status(404).send({message : "username is already exist"})
  } else {
    const salt = await bcrypt.genSalt(noOfRounds);
    const hashPass = await bcrypt.hash(password, salt);
  
    const usersData = await createUser({
      username : username,
      password : hashPass
    });
      
    response.send(usersData)
  }
});

router.post("/login", async function (request, response) {

  const {username,password} = request.body;
  const getUserByUsername = await getUserName(username);

  if(!getUserByUsername){
      response.status(400).send({message : "Invalid credentials"})
  } else {
    const pass = getUserByUsername.password
    const og = await bcrypt.compare(password,pass)
    if(og == true){
      const token = jwt.sign({ id : getUserByUsername._id } , process.env.secret_key )
      response.send({message : "Success" , token : token})
    } else {
      response.status(400).send({message : "Invalid credentials"})
    }
  }
});

export default router;
