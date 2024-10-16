const Goal = require("../models/goal.model");

const createGoal = async (body) => {
  return Goal.create(body);
};

const getGoalsByUserId = async (userId) => {
  return await Goal.find({ user: userId });
};

const updateGoal = async (id, body) => {
  return await Goal.findByIdAndUpdate(id, body, { new: true });
};

const deleteGoal = async (id) => {
  return await Goal.findByIdAndDelete(id);
};

const getGoalById = async (id) => {
  return await Goal.findById(id);
};

const getAllGoals =async ()=>{
  return await Goal.find().populate('user')
}

module.exports = {
  createGoal,
  getGoalsByUserId,
  updateGoal,
  deleteGoal,
  getGoalById,
  getAllGoals
};
