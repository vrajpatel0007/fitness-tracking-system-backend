const Workout = require("../models/workout.model");

const createWorkout = async (body) => {
  return Workout.create(body);
};

const findByUserId = async (userId) => {
  return Workout.find({ user: userId });
};

const allfinde = async()=>{
  return Workout.find()
}

const updateWorkout = async (id, body) => {
  return Workout.findByIdAndUpdate(id, body, { new: true });
};

const deleteWorkout = async (id) => {
  return Workout.findByIdAndDelete(id);
};

module.exports = {
  createWorkout,
  findByUserId,
  updateWorkout,
  deleteWorkout,
  allfinde
};
