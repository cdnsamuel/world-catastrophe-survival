const express = require("express");

const checkUserExist = require("../middlewares/checkUserExist");
const checkUserFree = require("../middlewares/checkUserFree");
const {
  signin,
  signup,
  logout,
  editMandatory,
} = require("../controllers/authControllers");

const router = express.Router();

router.post("/signin", checkUserExist, signin);
router.post("/signup", checkUserFree, signup);
router.patch("/editmandatory", checkUserExist, editMandatory);
router.get("/logout", logout);

module.exports = router;
