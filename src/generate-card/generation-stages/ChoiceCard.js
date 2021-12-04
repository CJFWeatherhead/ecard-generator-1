import React from 'react'

import './ChoiceCard.css'

function ChoiceCard(props) {
    return (
        <div style={{backgroundColor: props.color}} className="message-card">
            <h3> {props.text} </h3>
        </div>
    )
}

export default ChoiceCard
