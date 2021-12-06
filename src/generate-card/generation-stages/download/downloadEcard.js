import React, { useContext } from 'react'
import domtoimage from 'dom-to-image'

import { CardStageContext } from '../../../contexts/CardStageContext'
import './downloadEcard.css'

function downloadEcard() {
    // context provider defined in GenerateCard component
    const stageChange = useContext(CardStageContext)

    const downloadCard = () => {
        const node = document.getElementById("final-card")

        domtoimage.toPng(node).then(dataUrl => {
            let link = document.createElement("a")
            link.download = "my-custom-ecard.png"
            link.href = dataUrl

            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
    }

    return (
        <div id="download-generated-ecard">
            <h1>Here is your ecard</h1>
            <div id="final-card">
                <h3>Get well soon!</h3>
            </div>
            <button className="btn" onClick={downloadCard}>Download card</button>
            <button id="stageBtn" className="btn" onClick={() => {stageChange("img")}}>Previous stage</button>
        </div>
    )
}

export default downloadEcard
