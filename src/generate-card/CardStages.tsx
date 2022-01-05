import React from 'react'

import Image from './generation-stages/image/selectImage'
import Message from './generation-stages/message/selectMessage'
import Download from './generation-stages/download/downloadEcard'
import './CardStages.css'

interface CardStagesProps {
    componentName: string
}

interface DynamicComponent {
    [index: string]: JSX.Element
    img: JSX.Element
    msg: JSX.Element
    download: JSX.Element
}

const CardStages = (props: CardStagesProps): JSX.Element => {
    const CARD_GENERATION_COMPONENTS: DynamicComponent = {
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
