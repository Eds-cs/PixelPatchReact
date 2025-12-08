export default function ChatMessage({ message, chat }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const myId = user.id;

  const isMe = message.sender_id === myId;

  // Determine role
  const amClient = chat?.client_id === myId;

  // Determine sender label for OTHER person's messages
  let senderLabel = null;

  if (!isMe) {
    if (amClient) {
      // I'm the client → other person is the SHOP
      senderLabel = chat?.shop_name;
    } else {
      // I'm the shop owner → other person is the CLIENT
      senderLabel = `${chat?.client_first} ${chat?.client_last}`;
    }
  }

  const timeFormatted = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[60%] p-3 rounded-xl shadow-sm border ${
          isMe ? "bg-blue-500 text-white" : "bg-white"
        }`}
      >
        {/* Only show name for received messages */}
        {!isMe && senderLabel && (
          <div className="font-semibold text-sm mb-1">{senderLabel}</div>
        )}

        <div>{message.message_text}</div>

        <div className="text-xs opacity-70 mt-1 text-right">
          {timeFormatted}
        </div>
      </div>
    </div>
  );
}
