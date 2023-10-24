const express = require("express");

const router = express.Router();

const eventControllers = require("../controllers/eventControllers");

router.get("/", eventControllers.browse);

router.get("/:id", eventControllers.read);

router.get("/user/:id", eventControllers.browseByUser);

module.exports = router;
