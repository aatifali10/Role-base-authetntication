import Auth from "../models/authModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "abc";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await Auth.findOne({ email });

    if (userExists) {
      return res.status(401).json({ message: "User already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Auth.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: "User register successfully", user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await Auth.findOne({ email });
    if (!userExists) {
      return res.status(404).json({ message: "Invalid email " });
    }

    const isMatch = await bcrypt.compare(password, userExists.password);

    if (!isMatch) {
      return res.status(404).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({ id: userExists._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .status(200)
      .json({ message: "User login successfully", userExists, token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const userProfile = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const uploadProfilePicture = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const profilePictureUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const updatedUser = await Auth.findByIdAndUpdate(
      req.user._id,
      { profilePicture: profilePictureUrl },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({
        message: "Profile picture uploaded successfully",
        user: updatedUser,
      });
  } catch (error) {
    res.status(500).json({ error });
  }
};
