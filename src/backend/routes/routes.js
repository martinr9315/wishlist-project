const express = require("express");
const router = express.Router();
const registerTemplate = require("../models/register-models");

router.post("/register", (request, response) => {
  const newUser = new registerTemplate({
    username: request.body.username,
    password: request.body.password,
  });
  newUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
