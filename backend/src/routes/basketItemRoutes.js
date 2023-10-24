const express = require("express");

const router = express.Router();

const basketItemControllers = require("../controllers/basketItemControllers");

router.get("/", basketItemControllers.browse);

router.get("/:id", basketItemControllers.read);

module.exports = router;
