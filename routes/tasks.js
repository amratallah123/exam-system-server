const express = require("express");
const router = express.Router();
const testData = require("../TestData.json");
const { shuflleArray, areThereALlType } = require("../utils/services");

// words endpoint
router.get("/words", (req, res) => {
  let tenObject = areThereALlType(testData.wordList, 10);
  res.send(tenObject);
});

// rank endpoint
router.post("/rank", (req, res) => {
  console.log(req.body.score);
  if (req.body.score >= 90 && req.body.score <= 100) {
    res.send({
      rank: 80,
    });
  } else if (req.body.score >= 60 && req.body.score < 90) {
    res.send({
      rank: 56.67,
    });
  } else if (req.body.score >= 50 && req.body.score < 60) {
    res.send({
      rank: 40,
    });
  } else if (req.body.score >= 30 && req.body.score < 50) {
    res.send({
      rank: 26.67,
    });
  } else {
    res.send({
      rank: "out of rank",
    });
  }
});

module.exports = router;
