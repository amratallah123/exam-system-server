"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const TestData_1 = require("../TestData");
const services_1 = require("../utils/services");
// words endpoint
router.get("/words", (req, res) => {
    let tenObject = (0, services_1.areThereAllTypes)(TestData_1.default.words);
    res.send(tenObject);
});
// rank endpoint
router.post("/rank", (req, res) => {
    console.log(req.body.score);
    if (req.body.score >= 90 && req.body.score <= 100) {
        res.send({
            rank: 80,
        });
    }
    else if (req.body.score >= 60 && req.body.score < 90) {
        res.send({
            rank: 56.67,
        });
    }
    else if (req.body.score >= 50 && req.body.score < 60) {
        res.send({
            rank: 40,
        });
    }
    else if (req.body.score >= 30 && req.body.score < 50) {
        res.send({
            rank: 26.67,
        });
    }
    else {
        res.send({
            rank: "out of rank",
        });
    }
});
exports.default = router;
