const express = require("express");

const router = express.Router();

const tutorialControllers = require("../controllers/tutorialControllers");

router.get("/", tutorialControllers.browse);

router.get("/:id", tutorialControllers.read);

module.exports = router;
