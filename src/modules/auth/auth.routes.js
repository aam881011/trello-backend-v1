// import express from "express";
// import { body } from "express-validator";
// import { userModel } from "../../../databases/models/user.mjs";
// import { verifyToken } from "../../handlers/tokenHandler.mjs";
// import { validate } from "../../handlers/validation.mjs"; // Corrected importimport { verifyToken } from "../../handlers/tokenHandler.js";
// import { login, register } from "./auth.mjs";

// const router = express.Router();

// router.post(
//   "/signup",
//   body("username")
//     .isLength({ min: 8 })
//     .withMessage("username must be at least 8 characters"),
//   body("password")
//     .isLength({ min: 8 })
//     .withMessage("password must be at least 8 characters"),
//   body("confirmPassword")
//     .isLength({ min: 8 })
//     .withMessage("confirmPassword must be at least 8 characters"),
//   body("username").custom((value) => {
//     return userModel.findOne({ username: value }).then((user) => {
//       if (user) {
//         return Promise.reject("username already used");
//       }
//     });
//   }),
//   validate,
//   register
// );

// router.post(
//   "/login",
//   body("username")
//     .isLength({ min: 8 })
//     .withMessage("username must be at least 8 characters"),
//   body("password")
//     .isLength({ min: 8 })
//     .withMessage("password must be at least 8 characters"),
//   validate,
//   login
// );

// router.post("/verify-token", verifyToken, (req, res) => {
//   res.status(200).json({ user: req.user });
// });

// export default router;
// --------------------------------------
//es5

// var express = require("express");
// var body = require("express-validator").body;
// var userModel = require("../../../databases/models/user.js").userModel;
// var verifyToken = require("../../handlers/tokenHandler.js").verifyToken;
// var validate = require("../../handlers/validation.js").validate;
// var auth = require("./auth.js");
// var login = auth.login;
// var register = auth.register;



const router = require('express').Router()
const userController = require('./auth')
const { body } = require('express-validator')
const validation = require('../../handlers/validation')
const tokenHandler = require('../../handlers/tokenHandler')
const User = require('../../../databases/models/user')

router.post(
  '/signup',
  body('username').isLength({ min: 8 }).withMessage(
    'username must be at least 8 characters'
  ),
  body('password').isLength({ min: 8 }).withMessage(
    'password must be at least 8 characters'
  ),
  body('confirmPassword').isLength({ min: 8 }).withMessage(
    'confirmPassword must be at least 8 characters'
  ),
  body('username').custom(value => {
    return User.findOne({ username: value }).then(user => {
      if (user) {
        return Promise.reject('username already used')
      }
    })
  }),
  validation.validate,
  userController.register
)

router.post(
  '/login',
  body('username').isLength({ min: 8 }).withMessage(
    'username must be at least 8 characters'
  ),
  body('password').isLength({ min: 8 }).withMessage(
    'password must be at least 8 characters'
  ),
  validation.validate,
  userController.login
)

router.post(
  '/verify-token',
  tokenHandler.verifyToken,
  (req, res) => {
    res.status(200).json({ user: req.user })
  }
)

module.exports = router