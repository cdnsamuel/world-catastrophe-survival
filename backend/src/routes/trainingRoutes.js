const express = require("express");

const router = express.Router();

const trainingControllers = require("../controllers/trainingControllers");

router.get("/", trainingControllers.browseTrainings);

router.get("/:id", trainingControllers.read);

module.exports = router;
