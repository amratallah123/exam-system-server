const express = require("express");
const router = express.Router();
import testData from "../TestData";
import { Word } from "../models/word.Model";

import { areThereAllTypes } from "../utils/services";

// words endpoint
router.get("/words", (req: any, res: any) => {
  let tenObject: Array<Word> = areThereAllTypes(testData.words);
  res.send(tenObject);
});

// rank endpoint
router.post("/rank", (req: any, res: any) => {
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

export default router;
