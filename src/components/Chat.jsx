import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Message from './Message';

function Chat({ chat }) {
    const messages = chat ? chat.messages.map((message) => {
        return (
            <Message ts={message.ts} from={message.from} key={message.ts}>
                {message.content}
            </Message>
        );
    }) : undefined;
    return (
        <div className="chat">
            {messages}
        </div>
    );
}

Chat.propTypes = {
    chat: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        chat: state.selectedChat
    }
};

export default connect(mapStateToProps)(Chat);
