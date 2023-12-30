// import express from "express";
// import { param } from "express-validator";
// import { verifyToken } from "../../handlers/tokenHandler.mjs";
// import { isObjectId, validate } from "../../handlers/validation.mjs"; // Corrected importimport { verifyToken } from "../../handlers/tokenHandler.js";
// import * as boardController from "./board.cjs";
// // import {
// //   create,
// //   deleteBoard,
// //   getAll,
// //   getFavourites,
// //   getOne,
// //   update,
// //   updateFavouritePosition,
// //   updatePosition,
// // } from "./board.js";

// const router = express.Router();

// router.post("/", verifyToken, boardController.create);

// router.get("/", verifyToken, boardController.getAll);

// router.put("/", verifyToken, boardController.updatePosition);

// router.get("/favourites", verifyToken, boardController.getFavourites);

// router.put("/favourites", verifyToken, boardController.updateFavouritePosition);

// const validateBoardId = [
//   param("boardId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid id");
//     } else return Promise.resolve();
//   }),
//   validate
// ];


// router.get("/:boardId", validateBoardId, verifyToken, boardController.getOne);
// router.put("/:boardId", validateBoardId, verifyToken, boardController.update);
// router.delete("/:boardId", validateBoardId, verifyToken, boardController.delete);


// export default router;

// var express = require("express");
// var param = require("express-validator").param;
// var verifyToken = require("../../handlers/tokenHandler.js").verifyToken;
// var validationHandlers = require("../../handlers/validation.js");
// var isObjectId = validationHandlers.isObjectId;
// var validate = validationHandlers.validate;
// var boardController = require("./board.js");


const router = require("express").Router();
const { param } = require("express-validator");
const validation = require("../../handlers/validation");
const tokenHandler = require("../../handlers/tokenHandler");
const boardController = require("./board");

router.post("/", tokenHandler.verifyToken, boardController.create);

router.get("/", tokenHandler.verifyToken, boardController.getAll);

router.put("/", tokenHandler.verifyToken, boardController.updatePosition);

router.get(
  "/favourites",
  tokenHandler.verifyToken,
  boardController.getFavourites
);

router.put(
  "/favourites",
  tokenHandler.verifyToken,
  boardController.updateFavouritePosition
);

router.get(
  "/:boardId",
  param("boardId").custom((value) => {
    if (!validation.isObjectId(value)) {
      return Promise.reject("invalid id");
    } else return Promise.resolve();
  }),
  validation.validate,
  tokenHandler.verifyToken,
  boardController.getOne
);

router.put(
  "/:boardId",
  param("boardId").custom((value) => {
    if (!validation.isObjectId(value)) {
      return Promise.reject("invalid id");
    } else return Promise.resolve();
  }),
  validation.validate,
  tokenHandler.verifyToken,
  boardController.update
);

router.delete(
  "/:boardId",
  param("boardId").custom((value) => {
    if (!validation.isObjectId(value)) {
      return Promise.reject("invalid id");
    } else return Promise.resolve();
  }),
  validation.validate,
  tokenHandler.verifyToken,
  boardController.delete
);

module.exports = router;
