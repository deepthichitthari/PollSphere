const Poll = require("../models/Poll");

// Create Poll
const createPoll = async (req, res) => {
    try {
        const { question, options, groupId } = req.body;

        const newPoll = new Poll({
            question,
            options,
            groupId
        });

        await newPoll.save();

        res.status(201).json({
            message: "Poll Created Successfully",
            poll: newPoll
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Polls
const getPolls = async (req, res) => {
    try {
        const polls = await Poll.find();

        res.status(200).json(polls);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get Poll By ID
const getPollById = async (req, res) => {
    try {
        const poll = await Poll.findById(req.params.id);

        if (!poll) {
            return res.status(404).json({
                message: "Poll Not Found"
            });
        }

        res.status(200).json(poll);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Delete Poll
const deletePoll = async (req, res) => {
    try {
        const poll = await Poll.findByIdAndDelete(req.params.id);

        if (!poll) {
            return res.status(404).json({
                message: "Poll Not Found"
            });
        }

        res.status(200).json({
            message: "Poll Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createPoll,
    getPolls,
    getPollById,
    deletePoll
};