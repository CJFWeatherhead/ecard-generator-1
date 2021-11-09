import React from 'react'

import './SelectImage.css'

function SelectImage() {
    return (
        <div className="card-background">
            <header id="progress-headings">
                <h3 className="progress-heading">Choose a background</h3>
                <h3 className="progress-heading">Choose a message</h3>
                <h3 className="progress-heading">Download card</h3>
                <h3 className="progress-heading">Share it!</h3>
            </header>
            <div id="progress-indicator"></div>
        </div>
    )
}

export default SelectImage
