const goalService = require("../services/goal.service");

const createGoal = async (req, res) => {
  const { description, target } = req.body;
  const userId = req.user.id;
  try {
    const goal = await goalService.createGoal({ user: userId, description, target });
    return res.status(201).json({ message: "Goal created successfully", goal });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getGoals = async (req, res) => {
  const userId = req.user.id;
  try {
    const goals = await goalService.getGoalsByUserId(userId);
    return res.status(200).json(goals);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateGoal = async (req, res) => {
  const { goalId } = req.body.id;
  const updates = req.body;
  try {
    const goal = await goalService.updateGoal(goalId, updates);
    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }
    return res.status(200).json({ message: "Goal updated successfully", goal });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteGoal = async (req, res) => {
  const { goalId } = req.body.id;
  try {
    const goal = await goalService.deleteGoal(goalId);
    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }
    return res.status(200).json({ message: "Goal deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const allgetgoal = async (req, res) => {
  try {
    const goals = await goalService.getAllGoals();
    return res.status(200).json(goals);
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
  allgetgoal
};
