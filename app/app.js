// Include the Main React Dependencies
import React from 'react'
import { render } from 'react-dom'
import { Main } from './components/Main'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React
// Renders the contents according to the route page.
render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}/>
        <Route path=":saved" component={Main}/>
        </Route>
        <Route path="search" component={Main}/>
        <Route path="*" component={Whoops404}/>
    </Router>, document.getElementById("app"));