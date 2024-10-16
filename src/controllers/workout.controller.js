const workoutService = require("../services/workout.service");

// Create a new workout log
const createWorkout = async (req, res) => {
  const { activity, duration, caloriesBurned } = req.body;
  const userId = req.user.id;

  try {
    const workout = await workoutService.createWorkout({ user: userId, activity, duration, caloriesBurned });
    return res.status(201).json({ message: "Workout logged successfully", workout });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get all workouts for a user
const getWorkouts = async (req, res) => {
  const userId = req.user.id;

  try {
    const workouts = await workoutService.findByUserId(userId);
    return res.status(200).json(workouts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update a workout log
const updateWorkout = async (req, res) => {
  const workoutId = req.body.workoutId;

  try {
    const updatedWorkout = await workoutService.updateWorkout(workoutId, req.body);
    if (!updatedWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    return res.status(200).json({ message: "Workout updated successfully", updatedWorkout });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete a workout log
const deleteWorkout = async (req, res) => {
  const workoutId = req.body.workoutId;

  try {
    await workoutService.deleteWorkout(workoutId);
    return res.status(200).json({ message: "Workout deleted successfully." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const allgetWorkouts = async (req, res) => {
  try {
    const workouts = await workoutService.allfinde();
    return res.status(200).json(workouts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
  allgetWorkouts
};
