import React from 'react';

export default function Message({ts, from, children}) {
    return (
        <div className={`message from-${from}`}>
            <div className="ts">Sent on {String(ts)}</div>
            <div className="content">{children}</div>
        </div>
    );
}
