import React, { useContext } from 'react'

import { CardStageContext } from '../../contexts/CardStageContext'
import './selectImage.css'

function selectImage() {
    // context provider defined in GenerateCard component
    const stageChange = useContext(CardStageContext)

    return (
        <div id="card-image-background-options">
            <h1>Select an image!</h1>
            <button className="btn" onClick={() => {stageChange("msg")}}>Previous stage</button>
        </div>
    )
}

export default selectImage
