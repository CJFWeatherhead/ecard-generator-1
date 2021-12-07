import React, { useState } from 'react'

import CardStages from '../generate-card/CardStages'
import { CardStageContext } from '../contexts/CardStageContext'
import './GenerateCard.css'

function GenerateCard() {
    const [cardComponent, changeCardComponent] = useState("msg")

    let [width, setWidth] = useState({width: "21%"})

    const [firstMilestone, setFirstMilestone] = useState("progress-milestone progress-milestone__color")
    const [secondMilestone, setSecondMilestone] = useState("progress-milestone")
    const [thirdMilestone, setThirdMilestone] = useState("progress-milestone")
    const [fourthMilestone, setFourthMilestone] = useState("progress-milestone")

    const switchComponent = (componentName) => {
        progressBarStyles(componentName)
        changeCardComponent(componentName)
    }

    const progressBarStyles = (componentStage) => {
        switch(componentStage) {
            case "msg":
                setFirstMilestone("progress-milestone progress-milestone__color")
                setSecondMilestone("progress-milestone")
                setThirdMilestone("progress-milestone")
                setFourthMilestone("progress-milestone")
                setWidth({width: "21%"})
                break
            case "img":
                setFirstMilestone("progress-milestone progress-milestone__color")
                setSecondMilestone("progress-milestone progress-milestone__color")
                setThirdMilestone("progress-milestone")
                setFourthMilestone("progress-milestone")
                setWidth({width: "41%"})
                break
            case "download":
                setFirstMilestone("progress-milestone progress-milestone__color")
                setSecondMilestone("progress-milestone progress-milestone__color")
                setThirdMilestone("progress-milestone progress-milestone__color")
                setFourthMilestone("progress-milestone")
                setWidth({width: "61%"})
                break
            case "share":
                setFirstMilestone("progress-milestone progress-milestone__color")
                setSecondMilestone("progress-milestone progress-milestone__color")
                setThirdMilestone("progress-milestone progress-milestone__color")
                setFourthMilestone("progress-milestone progress-milestone__color")
                setWidth({width: "81%"})
                break
            default:
                console.log("Something weird is happening right now!!")
        }
    }

    return (
        <div className="card-background">
            <div id="progress-indicator">
                <div
                    id="progress-indicator-color"
                    style={width}>
                </div>
                <div className={firstMilestone}></div>
                <div className={secondMilestone}></div>
                <div className={thirdMilestone}></div>
                <div className={fourthMilestone}></div>
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
