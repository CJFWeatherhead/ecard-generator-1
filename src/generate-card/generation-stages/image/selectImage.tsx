import React, { useContext } from 'react'

import { CardStageContext } from '../../../contexts/CardStageContext'
import ChoiceCard from '../ChoiceCard'
import './selectImage.css'

interface BackgroundObject {
    backgroundImage: string;
    name: string;
    selected: boolean;
}

function selectImage(): JSX.Element {
    // context provider defined in GenerateCard component
    const stageChange = useContext(CardStageContext)

    const backgrounds: BackgroundObject[] = [
        {
            backgroundImage: "linear-gradient(326deg, #861657 0%, #ffa69e 74%)",
            name: "Edison's Broken Bulb",
            selected: false
        },
        {
            backgroundImage: "linear-gradient(326deg, #a4508b 0%, #5f0a87 94%)",
            name: "Obama's Resignation",
            selected: false
        },
        {
            backgroundImage: "linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)",
            name: "Spotify's Free Features",
            selected: false
        },
        {
            backgroundImage: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
            name: "Mars Conquest",
            selected: false
        },
        {
            backgroundImage: "linear-gradient(315deg, #d5adc8 0%, #ff8489 74%)",
            name: "Loan Money",
            selected: false
        },
        {
            backgroundImage: "linear-gradient(315deg, #6b0f1a 0%, #b91372 74%)",
            name: "Pollock's Inspiration",
            selected: false
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
                            color={"#fff"}
                            backgroundImage={background.backgroundImage}
                            // imageSelected={background.selected}
                        />
                    ))
                }
            </div>
            <button className="btn" onClick={() => {stageChange("msg")}}>Previous stage</button>
            <button className="btn" onClick={() => {stageChange("download")}}>Next stage</button>
        </div>
    )
}

export default selectImage
