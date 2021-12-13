import React, { useContext } from 'react'

import { CardStageContext } from '../../../contexts/CardStageContext'
import ChoiceCard from '../ChoiceCard'
import './selectMessage.css'

function selectMessage() {
    // context provider defined in GenerateCard component
    const nextStage = useContext(CardStageContext)

    const messagesAndGreetings = [
        "It's been a while, let's catch up",
        "Happy Birthday!",
        "Get well soon",
        "Have a good day :)"
    ]

    return (
        <div id="card-message-options">
            <h1>Select a message</h1>
            <div id="message-cards">
                {messagesAndGreetings.map(msg => (
                    <ChoiceCard key={Math.random() * msg.length} text={msg} />
                ))}
            </div>
            <button id="msg-stage-btn" className="btn" onClick={() => {nextStage("img")}}>Next stage</button>
        </div>
    )
}

export default selectMessage
