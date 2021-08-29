import { Message } from "../../models/Message";

export interface ChatMessagePropTypes {
    message?: Message,
    align: string
}

export const ChatMessagePropTypesDefault: ChatMessagePropTypes = {
    align: "left"
};
