import React from "react";
import { ChatHeaderPropTypes, ChatHeaderPropTypesDefault } from "./ChatHeaderSchema";
import "./ChatHeader.css";
import { clearStorage } from "../../Helpers";

const ChatHeader = ( {title, onLogout}: ChatHeaderPropTypes ) => {
    
    const logout = () => {
        clearStorage();
        onLogout()
    } 

    return (
        <div className="top-menu">
            <div className="buttons">
                <div className="button close"></div>
                <div className="button minimize"></div>
                <div className="button maximize"></div>
            </div>
            <div className="title">{title}</div>
            <div className="buttons right" onClick={logout}>
                <div className="button logout">Sair</div>
            </div>
        </div>
    )
}

export default ChatHeader;

ChatHeader.defaultProps = ChatHeaderPropTypesDefault
