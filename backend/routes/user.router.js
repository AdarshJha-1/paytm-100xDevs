const express = require("express");
const zod = require("zod");
const {User, Account} = require('../db')
const {JWT_SECRET} = require("../config");
const jwt = require('jsonwebtoken');

const router = express.Router();

const signupSchema = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

router.post("/signup", async (req, res) => {
  
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({ username: req.body.username });
  if (existingUser) {
    res.status(411).json({
      message: "Email already taken",
    });
  }

  const user = await User.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });

  const userId = user._id;

  const initialAmount = Math.floor(Math.random() * 10000) + 1;
  const account = await Account.create({
    userId,
    balance: initialAmount,
  })

  const token = jwt.sign(
    {
      userId: userId,
    },
    JWT_SECRET
  );

  res.status(200).json({
    message: "User created successfully",
    token: token,
  });
});

const signInSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  const { success } = signInSchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const checkUser = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (!checkUser) {
    res.status(411).json({
      message: "Error while logging in",
    });
  }

  const token = jwt.sign(
    {
      userId: checkUser._id,
    },
    JWT_SECRET
  );

  res.status(200).json({
    token: token,
  });
});

const updateSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

router.put("/", async (req, res) => {
  const { success } = updateSchema.safeParse(res.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne({ _id: req.userId }, req.body);
  res.status(200).json({
    message: "Updated successfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
