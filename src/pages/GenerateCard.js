import React, { useState } from 'react'

import CardStages from '../generate-card/CardStages'
import { CardStageContext } from '../contexts/CardStageContext'
import './GenerateCard.css'

function GenerateCard() {
    const [cardComponent, changeCardComponent] = useState("msg")

    let progressBarStyles = {
        colorWidth: {
            "width": "61%"
        },
        // add 4 boolean values; they correspond to the 4 milestones.
        // if true, a class will be applied which holds the background color
    }

    const switchComponent = (componentName) => {
        changeCardComponent(componentName)
    }

    return (
        <div className="card-background">
            <div id="progress-indicator">
                <div
                    id="progress-indicator-color"
                    style={progressBarStyles.colorWidth}>
                </div>
                <div className="progress-milestone"></div>
                <div className="progress-milestone"></div>
                <div className="progress-milestone"></div>
                <div className="progress-milestone"></div>
            </div>
            <header id="progress-headings">
                <CardStageContext.Provider value={switchComponent}>
                    <CardStages componentName={cardComponent} />
                </CardStageContext.Provider>
            </header>
        </div>
    )
}

export default GenerateCard
