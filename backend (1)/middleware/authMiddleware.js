import jwt from "jsonwebtoken";
import Auth from "../models/authModel.js";

const JWT_SECRET = "abc";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "No access token" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await Auth.findById(decoded.id);
    req.user = user;

    next();
  } catch (error) {
    return res.json({ error });
  }
};
