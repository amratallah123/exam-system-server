const express = require("express");
const router = express.Router();
const testData = require("../TestData.json");

function getRandomSubarray(arr, size) {
  let noun = 0;
  let adjective = 0;
  let adverb = 0;
  let verb = 0;
  let shuffled = arr.slice(0),
    i = arr.length,
    temp,
    index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  let tenObject = shuffled.slice(0, size);
  tenObject.forEach((element) => {
    if (element.pos == "noun" && noun == 0) {
      noun = 1;
    } else if (element.pos == "adjective" && adjective == 0) {
      adjective = 1;
    } else if (element.pos == "adverb" && adverb == 0) {
      adverb = 1;
    } else if (element.pos == "verb" && verb == 0) verb = 1;
  });
  // to shuffle when there is no at least one of them
  if (noun == 0 || adjective == 0 || adverb == 0 || verb == 0) {
    getRandomSubarray(arr, size);
  } else {
    return tenObject;
  }
}

router.get("/words", (req, res) => {
  let tenObject = getRandomSubarray(testData.wordList, 10);
  res.send(tenObject);
});

module.exports = router;
