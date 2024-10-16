const express = require("express");
const user_controller = require("../controllers/user.controller");
const workout_controller = require("../controllers/workout.controller");
const goal_controller = require("../controllers/goal.controller");
const { authUser,authorizeAdmin } = require("../middleware/auth");

const router = express.Router();

router.post("/createworkout", authUser, workout_controller.createWorkout);
router.get("/getworkouts", authUser, workout_controller.getWorkouts);
router.get("/allgetworkouts", authUser,authorizeAdmin, workout_controller.allgetWorkouts);
router.put("/updateworkout", authUser, workout_controller.updateWorkout);
router.delete("/deleteworkout", authUser, workout_controller.deleteWorkout);


module.exports = router;
