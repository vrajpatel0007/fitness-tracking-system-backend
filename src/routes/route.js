const express = require("express");
const routes = express.Router();
const userRoute = require("./user.route");
const goalRoute = require("./goal.route");
const workoutRoute = require("./workout.route");

routes.use("/user", userRoute);
routes.use("/goal", goalRoute);
routes.use("/workout", workoutRoute);

module.exports = routes;
