import React from 'react'

import './MessageCard.css'

function MessageCard(props) {
    return (
        <div className="message-card">
            <h3> {props.text} </h3>
        </div>
    )
}

export default MessageCard
