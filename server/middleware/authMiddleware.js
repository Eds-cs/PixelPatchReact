// middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authRequired = (req, res, next) => {
  const authHeader =
    req.headers.authorization || req.headers.Authorization;

  const token = authHeader?.split(" ")[1];


  if (!token)
    return res.status(401).json({ error: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {

    return res.status(401).json({ error: "Invalid token" });
  }
};
