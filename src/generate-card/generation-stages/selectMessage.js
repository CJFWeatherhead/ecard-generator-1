import React, { useContext } from 'react'

import { CardStageContext } from '../../contexts/CardStageContext'
import './selectMessage.css'

function selectMessage() {
    // context provider defined in GenerateCard component
    const nextStage = useContext(CardStageContext)
    return (
        <div id="card-message-options">
            <h1>Select a message!</h1>
            <button className="btn" onClick={() => {nextStage("img")}}>Next stage</button>
        </div>
    )
}

export default selectMessage
