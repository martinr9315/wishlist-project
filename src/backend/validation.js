const Joi = require("@hapi/joi");

const registerValidation = (request) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(request);
};

const loginValidation = (request) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(request);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
