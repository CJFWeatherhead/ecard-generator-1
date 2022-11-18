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
            backgroundImage: "url(https://via.placeholder.com/350)",
            name: "Image1",
            selected: false
        },
        {
            backgroundImage: "url(https://pixabay.com/get/g1d3134ba5fefbd05dfea67e0c407c73563409ddebdd1750a4e29fb5dad1b424e285303dfa652d691868828d313cd344b8a8c1e1f623302906c01c7fe87034f17_640.jpg)",
            name: "Image2",
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
