import express from "express";
import cors from "cors";
import http from "http";   
import dotenv from "dotenv";

dotenv.config();

import chatRoutes from "./routes/chat.js";
import businessRoutes from "./routes/businessRoutes.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import otpRoutes from "./routes/otp.js";
import uploadRoutes from "./routes/upload.js";
import aiRouter from "./routes/ai.js";
import shopRoutes from "./routes/shops.js";
import servicesRoutes from "./routes/services.js";
import reviewsRoutes from "./routes/reviews.js";
import documentsRoutes from "./routes/documents.js";
import shopServiceRoutes from "./routes/shopServiceRoutes.js";

// Routes for Repair Requests
import devices from "./routes/devices.js";
import addresses from "./routes/addresses.js";
import serviceRequests from "./routes/serviceRequests.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

/* AUTH / USER */
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/auth", otpRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/ai", aiRouter);

// SHOP APIs
app.use("/api/shops", shopRoutes);
app.use("/api/shops", servicesRoutes);
app.use("/api/shops", reviewsRoutes);
app.use("/api/shops", documentsRoutes);
app.use("/api/shop-services", shopServiceRoutes);

/* BUSINESS */
app.use("/api", businessRoutes);

/* CHAT */
app.use("/api", chatRoutes);

// authentication middleware (your JWT/session)
app.use((req, res, next) => {
  req.user = { id: 5 }; // <-- TEMPORARY (Replace with real auth)
  next();
});

app.use("/api/devices", devices);
app.use("/api/addresses", addresses);
app.use("/api/service-requests", serviceRequests);

// ❗ REMOVE app.listen() — duplicates server binding
// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });


// SOCKET.IO SERVER
const httpServer = http.createServer(app);

// Socket.IO setup
import { Server as IOServer } from "socket.io";
const io = new IOServer(httpServer, {
  cors: { origin: true, credentials: true },
});

// Load socket handlers
import setupChatSockets from "./sockets/chatSocket.js";
setupChatSockets(io);

// Only ONE listener — use httpServer
httpServer.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
