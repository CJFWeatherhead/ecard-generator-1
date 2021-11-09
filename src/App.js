import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import QuoteSelect from './quoteSelect'
import SelectImage from './components/images/SelectImage'

const App = () => (
    <Router>
        <div className="app">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/quote-select" component={QuoteSelect} />
                <Route path="/select-background" component={SelectImage} />
            </Switch>
        </div>
    </Router>
)

export default App