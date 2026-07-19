const express = require("express");

const {
  getStudentProfile,
  updateStudentProfile,
} = require("../controllers/studentController");

const router = express.Router();

// Get Student Profile
router.get("/:email", getStudentProfile);

// Update Student Profile
router.put("/:email", updateStudentProfile);

module.exports = router;