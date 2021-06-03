const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { registerValidation } = require("../validation");

router.post("/register", async (request, response) => {
  const { error } = registerValidation(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ email: request.body.email });
  if (emailExist) return response.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(request.body.password, salt);

  //const emailExist = await Us;

  const newUser = new User({
    username: request.body.username,
    email: request.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await newUser.save();
    response.send({ newUser: newUser._id });
  } catch (err) {
    response.status(400).send(err);
  }
});
/*
  newUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});*/

router.post("/login", async (request, response) => {
  const { error } = loginValidation(request.body);
  RTCIceTransportStateChangedEvent.send(loginValidation(request.body));
  //if (error) return response.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ email: request.body.email });
  if (!emailExist)
    return response.status(400).send("Email or password is wrong");
});
module.exports = router;
