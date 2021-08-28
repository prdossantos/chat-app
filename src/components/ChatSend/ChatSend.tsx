import React from "react";
import { ChatSendPropTypes, ChatSendPropTypesDefault } from "./ChatSendSchema";
import "./ChatSend.css";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../mutations/UserMutation";
import { useEffect } from "react";
import { onGraphQLError } from "../../Helpers";
import { CREATE_MESSAGE } from "../../mutations/MessageMutation";

const ChatSend = ( {inputPlaceholder, buttonText, onSignIn, onMessageAdded, isLogged, user}: ChatSendPropTypes ) => {
    
    let input: any;
    const [send, { data, loading, error }] = useMutation( isLogged ? CREATE_MESSAGE : SIGN_IN, {onError: onGraphQLError});

    if( loading ) { buttonText = 'loading...'; }
    else { buttonText = 'Enviar'}

    if( error ) {
        alert(error.message)
    }

    const onSubmit = () => {
        const {value} = input;
        let variables = {}

        if( !value.trim() ) {
            alert(`Insira ${isLogged ? `sua mensagem` : `seu nome`} ;)`)
            return;
        }
        
        if( isLogged ) {
            variables = { createMessageMessage: value.trim(), createMessageUserId: user?._id }
        } else {
            variables = { signInName: value.trim() }
        }

        send({variables})
    }

    useEffect(() => {
        if( data ) {
            const { signIn, createMessage } = data
            if( signIn && signIn._id ) {
                localStorage.setItem('_user', signIn)
                input.value = ''
                input.focus()
                onSignIn(signIn)
            }
            if( createMessage && createMessage._id ) {
                onMessageAdded(createMessage)
                input.value = ''
                input.focus()
            }
        }

    }, [data])

    return (
        <div className="bottom-wrapper clearfix">
            <div className="message-input-wrapper">
                <input 
                    className="message-input" 
                    placeholder={inputPlaceholder}
                    ref={( ref ) => input = ref } 
                />
            </div>
            <div className="send-message" onClick={onSubmit}>
                <div className="icon"></div>
                <div className="text">{buttonText}</div>
            </div>
        </div>
    )
}

export default ChatSend;

ChatSend.defaultProps = ChatSendPropTypesDefault
