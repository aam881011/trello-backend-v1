// import express from "express";
// import { param } from "express-validator";
// import { verifyToken } from "../../handlers/tokenHandler.mjs";
// import { isObjectId, validate } from "../../handlers/validation.mjs";
// // import { create, update } from "./section.cjs";
// // import { deleteBoard } from "../board/board.js";
// import * as boardController from "../board/board.cjs";
// import { create, update } from "./section.cjs";


// const router = express.Router({ mergeParams: true });
// // const router = express.Router();

// // Now sectionRoutes can access :boardId from the parent router


// router.post(
//   "/",
//   param("boardId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid id");
//     } else return Promise.resolve();
//   }),
//   validate,
//   verifyToken,
//   create
// );

// router.put(
//   "/:sectionId",
//   param("boardId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid board id");
//     } else return Promise.resolve();
//   }),
//   param("sectionId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid section id");
//     } else return Promise.resolve();
//   }),
//   validate,
//   verifyToken,
//   update
// );

// router.delete(
//   "/:sectionId",
//   param("boardId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid board id");
//     } else return Promise.resolve();
//   }),
//   param("sectionId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid section id");
//     } else return Promise.resolve();
//   }),
//   validate,
//   verifyToken,
//   boardController.delete
// );

// export default router;


// var express = require("express");
// var param = require("express-validator").param;
// var verifyToken = require("../../handlers/tokenHandler").verifyToken;
// var validationHandlers = require("../../handlers/validation");
// var isObjectId = validationHandlers.isObjectId;
// var validate = validationHandlers.validate;
// var boardController = require("../board/board");
// var sectionHandlers = require("./section");
// var create = sectionHandlers.create;
// var update = sectionHandlers.update;
// var router = express.Router({ mergeParams: true });


const router = require('express').Router({ mergeParams: true })
const { param } = require('express-validator')
const tokenHandler = require('../../handlers/tokenHandler')
const sectionController = require('./section')
const validation = require('../../handlers/validation')

router.post(
  '/',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  sectionController.create
)

router.put(
  '/:sectionId',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  param('sectionId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid section id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  sectionController.update
)

router.delete(
  '/:sectionId',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  param('sectionId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid section id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  sectionController.delete
)

module.exports = router