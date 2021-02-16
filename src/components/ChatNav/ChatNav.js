import "./ChatNav.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import VideocamIcon from "@material-ui/icons/Videocam";
import CallIcon from "@material-ui/icons/Call";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar } from "@material-ui/core";
import { useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";

const ChatNav = ({ selectedChat }) => {
  const { setSelectedChat } = useContext(ChatContext);
  const clearSelectedChat = () => {
    setSelectedChat(null);
  };
  return (
    <div className="chatnav">
      <div className="chatnav__left">
        <ArrowBackIcon onClick={clearSelectedChat} />
        <Avatar src={selectedChat.photoUrl} />
        <h2> {selectedChat.name} </h2>
      </div>
      <div className="chatnav__right">
        <VideocamIcon />
        <CallIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
};

export default ChatNav;
