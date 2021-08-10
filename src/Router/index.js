import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../Pages/Home'
import History from '../Pages/History'


export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/History'>
                    <History />
                </Route>
            </Switch>
        )
    }
}
