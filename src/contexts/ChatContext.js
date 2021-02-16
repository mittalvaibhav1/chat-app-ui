import { createContext, useState } from "react";
import userChats from "../data/userChats";
export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [chats, setChats] = useState(userChats);
  const [selectedChat, setSelectedChat] = useState(null);
  return (
    <ChatContext.Provider
      value={{ chats, setChats, selectedChat, setSelectedChat }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
