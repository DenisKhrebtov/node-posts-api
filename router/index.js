const express = require("express");

const router = express.Router();

// router.get("/humans", (req, res, next) => {
//   //   res.end("finish");
//   res.json({
//     posts: [{ key: "123", value: "321" }],
//   });
// });

router
  .route("/humans")
  .get((req, res, next) => {
    //   res.end("finish");
    return next({ message: "Error" });
    res.json({
      posts: [{ key: "123", value: "321" }],
    });
  })
  .post((req, res, next) => {
    const { name, age } = req.body;
    console.log(name, age);

    res.status(201).json({ post: "Hello" });
  });

router.route("/humans/:humanId/:id").delete((req, res, next) => {
  const { humanId, id } = req.params;
  console.log(humanId, id);

  res.end();
});

module.exports = {
  router,
};
