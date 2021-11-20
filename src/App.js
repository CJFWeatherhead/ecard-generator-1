import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import GenerateCard from './components/GenerateCard'

const App = () => (
    <Router>
        <div className="app">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/select-background" component={GenerateCard} />
            </Switch>
        </div>
    </Router>
)

export default App