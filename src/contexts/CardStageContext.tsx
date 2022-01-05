import React from 'react'

interface CardStageContextInterface {
    (componentName: string): void
}

export const CardStageContext = React.createContext<CardStageContextInterface>({} as CardStageContextInterface)