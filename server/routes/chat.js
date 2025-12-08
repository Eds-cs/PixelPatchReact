import express from "express";
import {
  startConversation,
  sendMessage,
  getMessages,
  getUserConversations
} from "../controllers/messageController.js";
import { authRequired } from "../middleware/authMiddleware.js";

// console.log(">>> routes/chat.js loaded");


const router = express.Router();

// Get all conversations for the logged-in user
router.get("/chat", authRequired, getUserConversations);

// Get messages for one conversation
router.get("/chat/:id/messages", authRequired, getMessages);

// Send a new message
router.post("/chat/send", authRequired, sendMessage);

// Start or get existing conversation
router.post("/chat/start", authRequired, startConversation);

export default router;
