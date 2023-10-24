const express = require("express");

const router = express.Router();

const teacherControllers = require("../controllers/teacherControllers");

router.get("/", teacherControllers.browse);

router.get("/:id", teacherControllers.read);

module.exports = router;
