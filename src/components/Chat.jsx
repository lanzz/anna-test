import React from 'react';

import Message from './Message';
import { participant } from '../const';

export default function Chat() {
    const date = new Date('2017-01-01 12:34:56')
    return (
        <div className="chat">
            <Message ts={date} from={participant.HOST}>
                Welcome to the chat
            </Message>
            <Message ts={date} from={participant.USER}>
                hello world
            </Message>
            <Message ts={date} from={participant.HOST}>
                You said: hello world
            </Message>
        </div>
    );
}
