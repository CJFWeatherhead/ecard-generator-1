import React from 'react'

import QuotePreview from './components/quotes/QuotePreview'

import './quoteSelect.css'

const quoteSelect = () => {
    return (
        <div className="quote-selection">
            <h1>Select a message for the card</h1>
            <div className="container">
                <QuotePreview />
            </div>
        </div>
    )
}

export default quoteSelect