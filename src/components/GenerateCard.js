import React from 'react'

import './GenerateCard.css'

function GenerateCard() {
    return (
        <div className="card-background">
            <header id="progress-headings">
                <h3 className="progress-heading">Choose a background</h3>
                <h3 className="progress-heading">Choose a message</h3>
                <h3 className="progress-heading">Download card</h3>
                <h3 className="progress-heading">Share it!</h3>
            </header>
            <div id="progress-indicator">
                <div className="progress-milestone"></div>
                <div className="progress-milestone"></div>
                <div className="progress-milestone"></div>
                <div className="progress-milestone"></div>
            </div>
        </div>
    )
}

export default GenerateCard
