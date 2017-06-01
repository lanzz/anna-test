import actionTypes from './actionTypes';
import { participant, welcomeMessage } from './const';

const initialState = {
    chats: [],
    selectedChat: null
};

var lastId = 0;

function buildChat() {
    const message = buildMessage(participant.HOST, welcomeMessage);
    lastId += 1;
    return {
        id: lastId,
        messages: [message],
        lastMessage: message
    };
}

function buildMessage(from, content) {
    lastId += 1;
    return {
        id: lastId,
        ts: new Date(),
        from: from,
        content: content
    };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_CHAT:
            const newChat = buildChat();
            return {
                ...state,
                chats: [
                    ...state.chats,
                    newChat
                ],
                selectedChat: newChat
            };
        case actionTypes.SELECT_CHAT:
            const chat = state.chats.find((chat) => chat.id === action.chatId);
            return {
                ...state,
                selectedChat: chat
            };
        case actionTypes.CLOSE_CHAT:
            const remainingChats = state.chats.find((chat) => chat.id === action.chatId);
            return {
                ...state,
                chats: remainingChats
            };
        case actionTypes.POST:
            const message = buildMessage(action.from, action.message);
            const messages = [
                ...state.selectedChat.messages,
                message
            ];
            if (action.from === participant.USER) {
                messages.push(buildMessage(participant.HOST, `You said: ${action.message}`));
            }
            return {
                ...state,
                selectedChat: {
                    ...state.selectedChat,
                    messages,
                    lastMessage: message
                }
            };
        default:
            return state;
    }
}
