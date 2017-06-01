import React from 'react';

export default function ChatList() {
    return (
        <ul className="chat-list">
            <li className="selected">
                <button className="close">╳</button>
                You said: hello world
            </li>
            <li>
                <button className="close">╳</button>
                You said: ok then
            </li>
        </ul>
    );
}
