import React from 'react'

import Image from './generation-stages/image/selectImage'
import Message from './generation-stages/message/selectMessage'
import Download from './generation-stages/download/downloadEcard'
import './CardStages.css'

function CardStages(props) {
    const CARD_GENERATION_COMPONENTS = {
        "img": <Image />,
        "msg": <Message />,
        "download": <Download />
    }

    return (
        <div id="card-selections__dynamic">
            {CARD_GENERATION_COMPONENTS[props.componentName]}
        </div>
    )
}

export default CardStages
