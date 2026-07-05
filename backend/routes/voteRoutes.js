const express = require("express");
const router = express.Router();

const {
    castVote,
    getResults
} = require("../controllers/voteController");

router.post("/", castVote);
router.get("/results/:pollId", getResults);

module.exports = router;