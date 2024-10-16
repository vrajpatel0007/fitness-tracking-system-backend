const express = require("express");
const goalController = require("../controllers/goal.controller");
const { authUser,authorizeAdmin } = require("../middleware/auth");

const router = express.Router();

// Goal routes
router.post("/creategoal", authUser, goalController.createGoal);
router.get("/getgoals", authUser, goalController.getGoals);
router.put("/updategoal", authUser, goalController.updateGoal);
router.delete("/deletegoal", authUser, goalController.deleteGoal);
router.delete("/allgetgoal", authUser,authorizeAdmin, goalController.allgetgoal);

module.exports = router;
