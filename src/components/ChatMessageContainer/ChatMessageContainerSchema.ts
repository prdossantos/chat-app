import { Message } from "../../models/Message";

export interface ChatMessageContainerPropTypes {
    messages: Message[]
};

export const ChatMessageContainerPropTypesDefault: ChatMessageContainerPropTypes = {
    messages: []
};
