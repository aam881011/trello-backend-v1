// import express from "express";
// import { body, param } from "express-validator";
// import { verifyToken } from "../../handlers/tokenHandler.mjs";
// import { isObjectId, validate } from "../../handlers/validation.mjs";
// // import { create, update, updatePosition } from "./task.cjs";
// // import { deleteBoard } from "../board/board.js";
// import * as boardController from "../board/board.cjs";
// // import { create, update } from "../section/section.cjs";

// const router = express.Router();

// router.post(
//   "/",
//   param("boardId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid board id");
//     } else return Promise.resolve();
//   }),
//   body("sectionId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid section id");
//     } else return Promise.resolve();
//   }),
//   validate,
//   verifyToken,
//   boardController.create
// );

// router.put(
//   "/update-position",
//   param("boardId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid board id");
//     } else return Promise.resolve();
//   }),
//   validate,
//   verifyToken,
//   boardController.updatePosition
// );

// router.delete(
//   "/:taskId",
//   param("boardId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid board id");
//     } else return Promise.resolve();
//   }),
//   param("taskId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid task id");
//     } else return Promise.resolve();
//   }),
//   validate,
//   verifyToken,
//   boardController.delete
// );

// router.put(
//   "/:taskId",
//   param("boardId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid board id");
//     } else return Promise.resolve();
//   }),
//   param("taskId").custom((value) => {
//     if (!isObjectId(value)) {
//       return Promise.reject("invalid task id");
//     } else return Promise.resolve();
//   }),
//   validate,
//   verifyToken,
//   boardController.update
// );

// export default router;



const router = require('express').Router({ mergeParams: true })
const { param, body } = require('express-validator')
const tokenHandler = require('../../handlers/tokenHandler')
const validation = require('../../handlers/validation')
const taskController = require('./task')

router.post(
  '/',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  body('sectionId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid section id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  taskController.create
)

router.put(
  '/update-position',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  taskController.updatePosition
)

router.delete(
  '/:taskId',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  param('taskId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid task id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  taskController.delete
)

router.put(
  '/:taskId',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  param('taskId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid task id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  taskController.update
)

module.exports = router