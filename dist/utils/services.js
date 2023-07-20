"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areThereAllTypes = void 0;
const shuffle = require("lodash.shuffle");
//shuffling array
function shuffleArray(array) {
    return shuffle(array);
}
//check there is at least one of all categories
function areThereAllTypes(array) {
    var noun = 0;
    var adjective = 0;
    var adverb = 0;
    var verb = 0;
    array = shuffleArray(array);
    var arr1 = array.slice(0, 10);
    arr1.forEach((element) => {
        if (element.pos == "noun" && noun == 0) {
            noun = 1;
        }
        else if (element.pos == "adjective" && adjective == 0) {
            adjective = 1;
        }
        else if (element.pos == "adverb" && adverb == 0) {
            adverb = 1;
        }
        else if (element.pos == "verb" && verb == 0)
            verb = 1;
    });
    if (noun == 0 || adjective == 0 || adverb == 0 || verb == 0) {
        areThereAllTypes(array);
    }
    else {
        return arr1;
    }
}
exports.areThereAllTypes = areThereAllTypes;
