const express = require("express");
const { router } = require("./router/index");

const app = express();

app.use(express.json());

app.use("/api", router);

app.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: err.message });
});

// app.use("/", (req, res, next) => {
//   console.log("Hello from middleware");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("Hello from middleware #2");
// });

module.exports = {
  app,
};
