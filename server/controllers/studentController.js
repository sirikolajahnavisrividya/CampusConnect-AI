const Student = require("../models/Student");

// Get Student Profile
const getStudentProfile = async (req, res) => {
  try {
    const { email } = req.params;

    const student = await Student.findOne({ email }).select("-password");

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getStudentProfile,
};