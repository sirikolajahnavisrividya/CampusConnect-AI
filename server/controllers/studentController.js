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

// Update Student Profile
const updateStudentProfile = async (req, res) => {
  try {
    const { email } = req.params;

    const updatedStudent = await Student.findOneAndUpdate(
      { email },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      student: updatedStudent,
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
  updateStudentProfile,
};