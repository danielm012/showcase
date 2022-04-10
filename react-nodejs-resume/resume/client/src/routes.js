
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';

import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Home from "./App";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/AboutMe" component={AboutMe} />
                    <Route path="/Resume" component={Resume} />
                </Switch>
            </Router>
        )
    }
}