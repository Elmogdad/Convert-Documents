import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";
import { json } from "express";

// -------CREATE NEW USER --------

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new Error("Please fill all the inputs.");
  }

  const userExists = await User.findOne({ email });
  if (userExists) res.status(400).send("User already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    createToken(res, newUser._id);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    console.error(error);
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// ------- lOGIN USER --------

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const extingUser = await User.findOne({ email });

    if (extingUser) {
      const isPasswordValid = await bcrypt.compare(
        password,
        extingUser.password
      );

      if (isPasswordValid) {
        createToken(res, extingUser._id);

        res.status(201).json({
          _id: extingUser._id,
          username: extingUser.username,
          email: extingUser.email,
          isAdmin: extingUser.isAdmin,
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(404).json(error.message);
  }
});

///---------------LOGOUT CURRENT USER --------

const logoutCurrentUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});

//------------- GET ALL USERS ----------------

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

//----------- GET USER PROFILE --------------

const getCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found.");
  }
});

//---------- UPDATE USER PROFILE ---------------

const updateCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({ username, email, password: hashedPassword });
    }
    const updateUser = await user.save();

    res.json({
      _id: updateUser._id,
      username: updateUser.username,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
    })
  } else {
    res.status(404);
    throw new Error("User not found")
  }
});

export {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
};
