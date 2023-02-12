import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
   
  const { data } = useContext(ChatContext);

    return (
        <div className="chat">
          <div className="chatInfo">
          <span>Conversation</span>
          <p>{data.user?.displayName}</p>
            <button onClick={( )=>signOut(auth)}>Logout</button>
          </div>
          
          <Messages />
          <Input/>
        </div>
      );
    };
    
    export default Chat;
    