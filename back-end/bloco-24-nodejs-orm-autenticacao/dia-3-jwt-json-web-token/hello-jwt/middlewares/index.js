const jwt = require('jsonwebtoken');
const joi = require('joi');
const error = require('./error');

const JWT_SECRET = 'supersecret';

const JWT_CONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const loginSchema = joi.object({
  username: joi.string().alphanum().min(5).required(),
  password: joi.string().min(5).required(),
})


const login = (req, res, next) => {
  const { username, password } = req.body;
  let admin = false;
 
  const { error } = loginSchema.validate({ username, password });

  if (error) {
    next(error);
  }

  if (username === 'admin' && password === 's3nh4S3gur4???') {
    admin = true;
  }

  const token = jwt.sign({username, admin}, JWT_SECRET, JWT_CONFIG);
  return res.status(201).json({ token });
};

const userMe = (req, res) => {
  const { username, admin } = req.infos;
  return res.status(200).json({ username, admin });
};

const topSecret = (_req, res, _next) => {
  return res.status(200).json({ secretInfo: "Peter Parker é o Homem-Arannha" });
}

const signup = (req, res, next) => {
  const { username, password } = req.body;

  const { error } = loginSchema.validate({ username, password });

  if (error) {
    next(error);
  }
}

module.exports = {
  error,
  login,
  userMe,
  topSecret,
};
