const express = require("express");

const router = express.Router();

const potoControllers = require("../controllers/potoControllers");

router.post("/", potoControllers.conversation);

module.exports = router;
