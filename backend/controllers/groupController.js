const Group = require("../models/Group");

// Create Group
const createGroup = async (req, res) => {
    try {
        const { groupName, description } = req.body;

        const newGroup = new Group({
            groupName,
            description
        });

        await newGroup.save();

        res.status(201).json({
            message: "Group Created Successfully",
            group: newGroup
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Groups
const getGroups = async (req, res) => {
    try {
        const groups = await Group.find();

        res.status(200).json(groups);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get Group by ID
const getGroupById = async (req, res) => {
    try {
        const group = await Group.findById(req.params.id);

        if (!group) {
            return res.status(404).json({
                message: "Group Not Found"
            });
        }

        res.status(200).json(group);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Delete Group
const deleteGroup = async (req, res) => {
    try {
        const group = await Group.findByIdAndDelete(req.params.id);

        if (!group) {
            return res.status(404).json({
                message: "Group Not Found"
            });
        }

        res.status(200).json({
            message: "Group Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createGroup,
    getGroups,
    getGroupById,
    deleteGroup
};