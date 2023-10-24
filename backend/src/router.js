const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const itemRoutes = require("./routes/itemRoutes");

router.use("/items", itemRoutes);

/* ************************************************************************* */

const basketRoutes = require("./routes/basketRoutes");

router.use("/baskets", basketRoutes);

/* ************************************************************************* */

const basketItemRoutes = require("./routes/basketItemRoutes");

router.use("/basket_items", basketItemRoutes);

/* ************************************************************************* */

const userRoutes = require("./routes/userRoutes");

router.use("/users", userRoutes);

/* ************************************************************************* */

const tutorialRoutes = require("./routes/tutorialRoutes");

router.use("/tutorials", tutorialRoutes);

/* ************************************************************************* */

const trainingRoutes = require("./routes/trainingRoutes");

router.use("/trainings", trainingRoutes);

/* ************************************************************************* */

const bookedTrainingRoutes = require("./routes/bookedTrainingRoutes");

router.use("/booked_trainings", bookedTrainingRoutes);

/* ************************************************************************* */

const teacherRoutes = require("./routes/teacherRoutes");

router.use("/teachers", teacherRoutes);

/* ************************************************************************* */

const bestiaryRoutes = require("./routes/bestiaryRoutes");

router.use("/beasts", bestiaryRoutes);

/* ************************************************************************* */

const eventRoutes = require("./routes/eventRoutes");

router.use("/events", eventRoutes);

/* ************************************************************************* */

const potoRoutes = require("./routes/potoRoutes");

router.use("/gepeto", potoRoutes);

/* ************************************************************************* */

const authRoutes = require("./routes/authRoutes");

router.use("/auth", authRoutes);

module.exports = router;
