const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

router.get("/", itemControllers.browse);

router.get("/:id", itemControllers.read);

module.exports = router;
