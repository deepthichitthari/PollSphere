const express = require("express");
const router = express.Router();

const {
    createGroup,
    getGroups,
    getGroupById,
    deleteGroup
} = require("../controllers/groupController");

router.post("/", createGroup);
router.get("/", getGroups);
router.get("/:id", getGroupById);
router.delete("/:id", deleteGroup);

module.exports = router;