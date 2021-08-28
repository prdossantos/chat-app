import React, { useRef } from "react";
import { ChatMessageContainerPropTypes, ChatMessageContainerPropTypesDefault } from "./ChatMessageContainerSchema";
import "./ChatMessageContainer.css";
import ChatMessage from "../ChatMessage/ChatMessage";
import { useEffect } from "react";

const ChatMessageContainer = ( {messages}: ChatMessageContainerPropTypes ) => {
    let containerRef: any = useRef(null)

    useEffect(() => {
        containerRef.current.scrollIntoView({ behavior: "smooth" })
    }, [messages.length])

    return (
        <ul className="messages">
            {messages.map( ( message ) => <ChatMessage key={message._id} message={message} /> )}
            <div style={{ float:"left", clear: "both" }}
                ref={containerRef}>
            </div>
        </ul>
    )
}

export default ChatMessageContainer;

ChatMessageContainer.defaultProps = ChatMessageContainerPropTypesDefault
