const userService = require("../services/user.service");
const goalService = require('../services/goal.service');
const workoutService = require('../services/workout.service');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Invalid request body" });
    }
    const userExists = await userService.findEmail(email);
    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.register({ username, email, password: hashedPassword });
    return res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.findEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect Password" });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: "1d" });
    return res.status(200).json({ message: "Login Successful", token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.body.userid;
  const updates = req.body;
  try {
    const user = await userService.updateUser(userId, updates);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.body.userid;
  try {
    await userService.deleteUser(userId);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const alluser = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json({ message: "Users fetched successfully", users });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

const getUserData = async (req, res) => {
  const { userId } = req.body.id;

  try {
    const user = await userService.findById(userId);
    const goals = await goalService.getGoalsByUserId(userId);
    const workouts = await workoutService.findByUserId(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      user,
      goals,
      workouts,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data', error });
  }
};

module.exports = {
  register,
  login,
  updateUser,
  deleteUser,
  alluser,
  getUserDatagetUserData
};
