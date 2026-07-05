const express = require("express");
const router = express.Router();

const {
    createPoll,
    getPolls,
    getPollById,
    deletePoll
} = require("../controllers/pollController");

router.post("/", createPoll);
router.get("/", getPolls);
router.get("/:id", getPollById);
router.delete("/:id", deletePoll);

module.exports = router;