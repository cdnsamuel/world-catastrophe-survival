const express = require("express");

const router = express.Router();

const bestiaryControllers = require("../controllers/bestiaryControllers");

router.get("/", bestiaryControllers.browse);

router.get("/:id", bestiaryControllers.read);

module.exports = router;
