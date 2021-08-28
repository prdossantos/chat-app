import { User } from "../../models/User";

export interface ChatSendPropTypes {
    inputPlaceholder: string,
    buttonText: string,
    onSignIn?: any,
    onMessageAdded?: any,
    isLogged: boolean,
    user?: User
}

export const ChatSendPropTypesDefault: ChatSendPropTypes = {
    inputPlaceholder: 'Type your message here...',
    buttonText: 'Send',
    isLogged: false
}
