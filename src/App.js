import "./styles.css";
import React from "react";
import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import ChatContextProvider from "./contexts/ChatContext";

function App() {
  return (
    <div className="App">
      <ChatContextProvider>
        <Contacts />
        <Main />
      </ChatContextProvider>
    </div>
  );
}

export default App;
