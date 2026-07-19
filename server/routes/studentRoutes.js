const express = require("express");

const {
  getStudentProfile,
} = require("../controllers/studentController");

const router = express.Router();

// Get Student Profile
router.get("/:email", getStudentProfile);

module.exports = router;