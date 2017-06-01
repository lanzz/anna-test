import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeChat, selectChat } from '../actions';

function ChatList({ chats, selectedChat, closeChat, selectChat }) {
    const chatsList = chats.map((chat) => (
        <li className={chat === selectedChat? 'selected' : undefined}
            key={chat.id}
            onClick={() => selectChat(chat.id)}
        >
            <button className="close" onClick={() => closeChat(chat.id)}>╳</button>
            {chat.lastMessage.content}
        </li>
    ));
    return (
        <ul className="chat-list">
            {chatsList}
        </ul>
    );
}

ChatList.propTypes = {
    chats: PropTypes.array.isRequired,
    selectedChat: PropTypes.object,
    closeChat: PropTypes.func.isRequired,
    selectChat: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        chats: state.chats,
        selectedChat: state.selectedChat
    };
};

const mapDispatchToProps = { closeChat, selectChat };

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
