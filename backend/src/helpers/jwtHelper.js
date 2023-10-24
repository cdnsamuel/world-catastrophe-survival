const jwt = require("jsonwebtoken");

const { APP_SECRET } = process.env;

const signOptions = { expiresIn: "1h" };

const encodeJWT = (payload) => {
  return jwt.sign(payload, APP_SECRET, signOptions);
};

const decodeJWT = (token) => {
  return jwt.decode(token, APP_SECRET);
};

module.exports = { encodeJWT, decodeJWT };
