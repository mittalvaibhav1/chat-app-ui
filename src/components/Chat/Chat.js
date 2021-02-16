import { useEffect, useState } from "react";
import ChatArea from "../ChatArea/ChatArea";
import ChatNav from "../ChatNav/ChatNav";
import "./Chat.css";

const Chat = ({ selectedChat }) => {
  const [messages, setMessages] = useState(selectedChat.messages);
  useEffect(() => {
    setMessages(selectedChat.messages);
  }, [selectedChat]);
  return (
    <div className="chat">
      <ChatNav selectedChat={selectedChat} />
      <ChatArea messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default Chat;
