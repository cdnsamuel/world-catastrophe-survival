const { encodeJWT } = require("../helpers/jwtHelper");

const tables = require("../tables");

// const { createOne } = require("../models/user.model.js");

const signin = async (req, res) => {
  try {
    if (req.user.password !== req.body.password)
      throw new Error("Password doesn't match");

    delete req.user.password;

    const token = encodeJWT(req.user);

    res.cookie("auth_token", token, { httpOnly: true, secure: false });

    res.status(200).json(req.user);
  } catch (error) {
    console.warn(error);
    res.status(403).send(error);
  }
};

const signup = async (req, res) => {
  const [result] = await tables.user.createOne(req.body);

  delete req.body.password;

  if (result.affectedRows) {
    res.status(201).send({ id: result.insertId, ...req.body });
  } else {
    res.sendStatus(500);
  }
};

const logout = (req, res) => {
  res.clearCookie("auth_token").sendStatus(200);
};

const editMandatory = async (req, res) => {
  const olduser = req.user;
  const newUser = { ...olduser, ...req.body };

  const [result] = await tables.user.updateMandatory(newUser);

  delete req.body.password;

  if (result.affectedRows) {
    res.status(201).send({ id: result.insertId, ...req.body });
  } else {
    res.sendStatus(500);
  }
};

module.exports = { signin, signup, logout, editMandatory };
