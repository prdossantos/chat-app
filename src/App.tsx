import { useQuery } from '@apollo/client';
import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import ChatHeader from './components/ChatHeader/ChatHeader';
import ChatMessageContainer from './components/ChatMessageContainer/ChatMessageContainer';
import ChatSend from './components/ChatSend/ChatSend';
import { getStorageItem, onGraphQLError, setStorageItem } from './Helpers';
import { Message } from './models/Message';
import { User } from './models/User';
import { GET_MESSAGES } from './queries/MessageQuery';

const App = () => {

	const [messages, setMessages] = useState<Message[]>([]);
	const [logged, setLogged] = useState<User>();
	const [isLogged, setIsLogged] = useState(false);
	const onSignIn = ( user: User ) => setLogged(user)
	const onMessageAdded = ( message: Message ) => {
		const _messages: Message[] = [...messages];
		_messages.push(message)
		setMessages(_messages)

	}
	const onLogout = () =>{ 
		setIsLogged(false)
	}
    const { data } = useQuery( GET_MESSAGES, {onError: onGraphQLError, pollInterval: 1000});

	useEffect(() => {
		const user: User = getStorageItem('_user');
		if( user ) {
			setLogged(user)
		}
	}, [])

	useEffect( () => {
		if( logged?._id ) {
			setStorageItem('_user', logged)
			setIsLogged(true)
		}
	}, [logged])

	useEffect(() => {
		if( data && data.messages ) {
			setMessages(data.messages)
		}
	}, [data])

	return (
		<Fragment>
			<div className="chat-window">
				<ChatHeader title="Chat | Gyra +" onLogout={onLogout} />
				{isLogged && <ChatMessageContainer messages={messages} />}
				{!isLogged && <p className="empty-info"> Insira seu nome para entrar no chat </p>}
				<ChatSend 
					buttonText={!isLogged ? `Entrar` : `Enviar`}
					inputPlaceholder={!isLogged ? `Insira seu nome...` : `Insira sua mensagem aqui...`}
					onSignIn={onSignIn}
					onMessageAdded={onMessageAdded}
					isLogged={isLogged}
					user={logged}
				/>
			</div>
		</Fragment>
	);
}

export default App;
