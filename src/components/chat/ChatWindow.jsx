// ChatWindow.jsx
import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export default function ChatWindow({ chatId, messages, refreshMessages, socket, chats }) {
  const containerRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    // scroll to bottom when messages change
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages]);

  if (!chatId)
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Select a chat to start messaging
      </div>
    );

  return (
    <div className="flex flex-col h-full w-full bg-gray-50 relative" >
      {/* Message list */}
      <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-3 pb-28">
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          message={msg}
          chat={chats.find(c => c.id === chatId)}
        />
      ))}


        <div ref={bottomRef} />
      </div>

      {/* Input zone ALWAYS at bottom */}
      <div className="border-t bg-white p-4 sticky bottom-0">
        <ChatInput chatId={chatId} onMessageSent={refreshMessages} socket={socket} />
      </div>
    </div>
  );
}
