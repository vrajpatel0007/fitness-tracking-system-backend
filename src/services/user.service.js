const User = require("../models/user.model");

const register = async (body) => {
  return User.create(body);
};

const findEmail = async (email) => {
  return await User.findOne({ email });
};

const findById = async (id) => {
  return await User.findById(id);
};

const updateUser = async (id, body) => {
  return await User.findByIdAndUpdate(id, body, { new: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

const getAllUsers = async ()=>{
  return await User.find()
}



module.exports = {
  register,
  findEmail,
  findById,
  updateUser,
  deleteUser,
  getAllUsers
};
