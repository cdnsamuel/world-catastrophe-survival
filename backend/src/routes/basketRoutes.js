const express = require("express");

const router = express.Router();

const basketControllers = require("../controllers/basketControllers");

router.get("/", basketControllers.browse);

router.get("/:id", basketControllers.read);

module.exports = router;
