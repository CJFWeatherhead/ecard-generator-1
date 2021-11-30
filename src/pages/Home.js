import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => (
    <div className="home">
        <main id="heading">
            <h1>Generate <br /> your own e-card</h1>
            <div id="home-card">
                <div id="code-lines">
                    <div className="stripe" id="code-stripe-1"></div>
                    <div className="stripe" id="code-stripe-2"></div>
                    <div className="stripe" id="code-stripe-3"></div>
                    <div className="stripe" id="code-stripe-4"></div>
                </div>
            </div>
        </main>
        <Link to="/select-background">
            <button className="btn">Generate card!</button>
        </Link>
    </div>
)

export default Home