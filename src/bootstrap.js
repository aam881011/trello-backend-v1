// es6
// import authRoutes from "./modules/auth/auth.routes.mjs";
// import boardRoutes from "./modules/board/board.routes.mjs";
// import sectionRoutes from "./modules/section/section.routes.mjs";
// import taskRoutes from "./modules/task/task.routes.mjs";

// export function bootstrap(app) {
//   app.get("/", (req, res) => res.send("Hello World!"));

//   app.use("/api/v1/auth", authRoutes);
//   app.use("/api/v1/boards", boardRoutes);
//   app.use("/api/v1/boards/:boardId/sections", sectionRoutes);
//   app.use("/api/v1/boards/:boardId/tasks", taskRoutes);

//   // app.use("/api/v1/test", testRouter);
//   //--------------------------------------------------------------------
//   app.all("*", (req, res, next) => {
//     next(new Error("not found endpoint"));
//   });

//   app.use((err, req, res, next) => {
//     let error = err.message;
//     const code = err.statusCode || 500;
//     res.status(code).json({ error });
//   });
// }
//------------------------------------------
// es 5

var authRoutes = require("./modules/auth/auth.routes");
var boardRoutes = require("./modules/board/board.routes");
var sectionRoutes = require("./modules/section/section.routes");
var taskRoutes = require("./modules/task/task.routes");

function bootstrap(app) {
  app.get("/", function (req, res) {
    res.send("Hello World!");
  });

  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/boards", boardRoutes);
  app.use("/api/v1/boards/:boardId/sections", sectionRoutes);
  app.use("/api/v1/boards/:boardId/tasks", taskRoutes);

  // app.use("/api/v1/test", testRouter);
  //--------------------------------------------------------------------
  app.all("*", function (req, res, next) {
    next(new Error("not found endpoint"));
  });

  app.use(function (err, req, res, next) {
    var error = err.message;
    var code = err.statusCode || 500;
    res.status(code).json({ error: error });
  });
}

module.exports = bootstrap;