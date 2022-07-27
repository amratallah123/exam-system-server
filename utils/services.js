const _ = require("lodash");

//shuffling array
function shuflleArray(array) {
  return _.shuffle(array);
}
//check there is no at least one of them

function areThereALlType(array) {
  var noun = 0;
  var adjective = 0;
  var adverb = 0;
  var verb = 0;
  array = shuflleArray(array);
  array = array.slice(0, 10);
  array.forEach((element) => {
    if (element.pos == "noun" && noun == 0) {
      noun = 1;
    } else if (element.pos == "adjective" && adjective == 0) {
      adjective = 1;
    } else if (element.pos == "adverb" && adverb == 0) {
      adverb = 1;
    } else if (element.pos == "verb" && verb == 0) verb = 1;
  });
  while (noun == 0 || adjective == 0 || adverb == 0 || verb == 0) {
    shuflleArray(array);
  }
  return array;
}
module.exports = {
  shuflleArray,
  areThereALlType,
};
