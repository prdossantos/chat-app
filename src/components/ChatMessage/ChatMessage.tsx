import React from "react";
import { ChatMessagePropTypes, ChatMessagePropTypesDefault } from "./ChatMessageSchema";
import "./ChatMessage.css";

const ChatMessage = ( {message, align}: ChatMessagePropTypes ) => {
    
    return (
        <li key={message?._id} className={`message appeared ${align}`}>
            <div className="avatar"></div>
            <div className="text-wrapper">
                <div className="text">{message?.message}</div>
            </div>
        </li>
    )
}

export default ChatMessage;

ChatMessage.defaultProps = ChatMessagePropTypesDefault
