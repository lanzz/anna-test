import actionTypes from './actionTypes';

export function addChat() {
    return {
        type: actionTypes.ADD_CHAT
    };
}

export function selectChat(chatId) {
    return {
        type: actionTypes.SELECT_CHAT,
        chatId
    };
}

export function closeChat(chatId) {
    return {
        type: actionTypes.CLOSE_CHAT,
        chatId
    };
}

export function post(from, message) {
    return {
        type: actionTypes.POST,
        from,
        message
    };
}
