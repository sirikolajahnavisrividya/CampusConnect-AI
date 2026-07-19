const Student = require("../models/Student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// =======================
// Register Student
// =======================
const registerStudent = async (req, res) => {
  try {
    const { name, email, password, department, cgpa, skills } = req.body;

    // Check if student already exists
    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save Student
    const student = await Student.create({
      name,
      email,
      password: hashedPassword,
      department,
      cgpa,
      skills,
    });

    res.status(201).json({
      success: true,
      message: "Student Registered Successfully",
      student,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Login Student
// =======================
const loginStudent = async (req, res) => {
  try {

    const { email, password } = req.body;

    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(400).json({
        success: false,
        message: "Student not found",
      });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: student._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
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
  registerStudent,
  loginStudent,
};