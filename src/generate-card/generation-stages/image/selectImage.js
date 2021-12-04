import React, { useContext } from 'react'

import { CardStageContext } from '../../../contexts/CardStageContext'
import ChoiceCard from '../ChoiceCard'
import './selectImage.css'

function selectImage() {
    // context provider defined in GenerateCard component
    const stageChange = useContext(CardStageContext)

    const backgrounds = [
        {
            color: "#737285",
            name: "Some color"
        },
        {
            color: "#785285",
            name: "Some color"
        },
        {
            color: "#752285",
            name: "Some color"
        },
        {
            color: "#737965",
            name: "Some color"
        },
        {
            color: "#737AB5",
            name: "Some color"
        },
        {
            color: "#735F85",
            name: "Some color"
        },
    ]

    return (
        <div id="card-image-background-options">
            <h1>Select an image</h1>
            <div id="background-cards">
                {
                    backgrounds.map(background => (
                        <ChoiceCard
                            key={Math.random() * background.name.length}
                            text={background.name}
                            color={background.color}
                        />
                    ))
                }
            </div>
            <button className="btn" onClick={() => {stageChange("msg")}}>Previous stage</button>
        </div>
    )
}

export default selectImage
