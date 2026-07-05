const Vote = require("../models/Vote");

// Cast Vote
const castVote = async (req, res) => {
    try {
        const { userId, pollId, option } = req.body;

        // Check if user already voted
        const existingVote = await Vote.findOne({
            userId,
            pollId
        });

        if (existingVote) {
            return res.status(400).json({
                message: "You have already voted."
            });
        }

        const vote = new Vote({
            userId,
            pollId,
            option
        });

        await vote.save();

        res.status(201).json({
            message: "Vote Submitted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get Results
const getResults = async (req, res) => {
    try {

        const pollId = req.params.pollId;

        const votes = await Vote.find({ pollId });

        res.status(200).json({
            totalVotes: votes.length,
            votes
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    castVote,
    getResults
};