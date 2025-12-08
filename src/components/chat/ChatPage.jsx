import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import axios from "axios";
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";

export default function ChatPage() {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [autoStarted, setAutoStarted] = useState(false);

  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  const location = useLocation();
  const shopFromLink = location.state?.shop || null;

  // -------------------------------
  // Create socket connection
  // -------------------------------
  useEffect(() => {
    if (!token) return;

    const s = io("http://localhost:5000", { auth: { token } });

    s.on("connect", () => console.log("socket connected", s.id));
    s.on("connect_error", (err) => console.error("socket connect_error", err.message));

    s.on("new_message", (msg) => {
      if (msg.chat_id === activeChat) {
        setMessages(prev => [...prev, msg]);
      } else {
        setChats(prev => {
          const idx = prev.findIndex(c => c.id === msg.chat_id);
          if (idx !== -1) {
            const copy = [...prev];
            copy[idx] = { ...copy[idx], last_message_at: msg.timestamp };
            const moved = copy[idx];
            copy.splice(idx, 1);
            return [moved, ...copy];
          }
          return prev;
        });
      }
    });

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, [token, activeChat]);

  // -------------------------------
  // Load Chat List
  // -------------------------------
  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:5000/api/chat", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setChats(res.data);
      })
      .catch((err) => console.error("CHAT LIST ERROR:", err));
  }, [token]);

  // -------------------------------
  // Auto-start chat ONLY if coming from ShopProfile
  // -------------------------------
  useEffect(() => {
    if (!shopFromLink) return;           // no shop passed? stop.
    if (autoStarted) return;            // prevent multiple runs
    if (chats.length === 0) return;     // wait for chat list to load

    const shopId = shopFromLink.id;
    if (!shopId) return;

    console.log("AUTO-START triggered for shop:", shopId);

    const existingChat = chats.find(c => c.shop_id === shopId);

    if (existingChat) {
      setActiveChat(existingChat.id);
      setAutoStarted(true);
      return;
    }

    // Create new chat
    axios
      .post(
        "http://localhost:5000/api/chat/start",
        { shop_id: shopId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setActiveChat(res.data.chat.id);
        setAutoStarted(true);
      })
      .catch((err) => console.error("CREATE CHAT ERROR:", err));

  }, [shopFromLink, chats, token, autoStarted]);

  // -------------------------------
  // Auto-open newest chat ONLY when not auto-starting
  // -------------------------------
  useEffect(() => {
    if (autoStarted) return;        // auto-start overrides this
    if (activeChat) return;         // already have an active chat
    if (chats.length > 0) {
      setActiveChat(chats[0].id);
    }
  }, [chats, autoStarted]);

  // -------------------------------
  // Load Messages
  // -------------------------------
  useEffect(() => {
    if (!activeChat || !token) return;
    if (socket) socket.emit("join", activeChat);

    axios
      .get(`http://localhost:5000/api/chat/${activeChat}/messages`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("CHAT MSG ERROR:", err));

    return () => {
      if (socket) socket.emit("leave", activeChat);
    };
  }, [activeChat, socket, token]);

  const refreshMessages = () => {
    if (!activeChat) return;
    axios
      .get(`http://localhost:5000/api/chat/${activeChat}/messages`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMessages(res.data));
  };

  return (
    <div className="h-screen flex bg-gray-100">
      <ChatList chats={chats} activeChat={activeChat} onSelectChat={setActiveChat} />
      <div className="flex-1 h-full">
        <ChatWindow
          chatId={activeChat}
          messages={messages}
          refreshMessages={refreshMessages}
          socket={socket}
          chats={chats}
        />
      </div>
    </div>
  );
}
